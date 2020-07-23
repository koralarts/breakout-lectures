(function($) {
  const BASE_URL = 'http://localhost:8888'

  const resetError = () => $('#error-msg').hide()
  const setError = msg => $('#error-msg').html(msg).fadeIn()

  // Helper function to create list items
  const createListItem = data => `
    <li id="${data.id}">
      <span>${data.name}</span>
      <div>
        <input type="checkbox" ${data.isCompleted ? "checked" : ""} data-id="${data.id}" aria-label="${data.name} ${data.isCompleted ? "completed" : "incomplete"}" />
        <button class="delete-btn" data-id="${data.id}" aria-label="Delete ${data.name}"><i class="fa fa-trash"></i></button>
      </div>
    </li>
  `

  // Helper function to clean data from the form
  const cleanSerializedData = data => data.reduce((obj, d) => ({ ...obj, [d.name]: d.value}), {})

  const getItems = () => {
    $.get(`${BASE_URL}/items`, (data) => {
      const items = []
      for (const key in data) {
        items.push(createListItem(data[key]))
      }

      $('#items-list').html(items.join(''))
    }).fail(() => {
      setError('Error occured while grabbing Todo Items')
    })
  }

  // Add new Todo Item
  $('#add-form').on('submit', (e) => {
    e.preventDefault()

    const $form = $('#add-form')

    resetError()

    $.post({
      url: `${BASE_URL}/items`,
      data: JSON.stringify(cleanSerializedData($form.serializeArray())),
      success: (data) => {
        $('#items-list').append(createListItem(data))
        $form[0].reset()
      },
      error: () => {
        setError('Error occured while saving Todo Item')
      },
      contentType: 'application/json'
    })
  })

  // Update completion state of item
  $('#items-list').on('change', 'input[type="checkbox"]', (e) => {
    const $checkbox = $(e.currentTarget)
    const itemId = $checkbox.data('id')

    $.ajax({
      method: 'PUT',
      url: `${BASE_URL}/items/${itemId}`,
      data: JSON.stringify({ isCompleted: $checkbox.is(':checked') }),
      contentType: 'application/json',
      error: () => {
        setError('Error occured while saving Todo Item')
      },
    })
  })

  // Delete item
  $('#items-list').on('click', '.delete-btn', (e) => {
    const $btn = $(e.currentTarget)
    const itemId = $btn.data('id')

    $.ajax({
      method: 'DELETE',
      url: `${BASE_URL}/items/${itemId}`,
      success: getItems,
      error: () => {
        setError('Error occured while deleting Todo Item')
      },
    })
  })

  $(function() {
    getItems()
  })
})(jQuery)
