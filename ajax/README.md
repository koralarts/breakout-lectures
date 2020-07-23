# Ajax Breakout Lecture

## Important Links

 - [Postman](https://www.postman.com/)
 - [jQuery Ajax](https://api.jquery.com/Jquery.ajax/)
 - [jQuery Get](https://api.jquery.com/Jquery.get/)
 - [jQuery Post](https://api.jquery.com/Jquery.post/)

## jQuery Ajax Recipes

### Get

```javascript
// Shorthand
$.get(url, (data) => {
  // handle success here
}).fail(() => {
  // handle failure here
}).always(() => {
  // something that should always be done regardless of result (hide loading?)
})

// Longhand using callback
$.ajax({
  method: 'GET',
  url: url
  success: (data) => {
    // handle success here
  },
  error: () => {
    // handle failure here
  },
}).always(() => {
  // something that should always be done regardless of result (hide loading?)
})

// Longhand using promises
$.ajax({
  method: 'GET',
  url: url
}).done(() => {
  // handle success here
}).fail(() => {
  // handle failure here
}).always(() => {
  // something that should always be done regardless of result (hide loading?)
})
```

### Post

```javascript
// Shorthand
$.post(url, data, (data) => {
  // handle success here
}).fail(() => {
  // handle failure here
}).always(() => {
  // something that should always be done regardless of result (hide loading?)
})

// Longhand using callback
$.ajax({
  method: 'POST',
  url: url,
  data: data,
  success: (data) => {
    // handle success here
  },
  error: () => {
    // handle failure here
  },
}).always(() => {
  // something that should always be done regardless of result (hide loading?)
})

// Longhand using promises
$.ajax({
  method: 'POST',
  url: url,
  data: data
}).done(() => {
  // handle success here
}).fail(() => {
  // handle failure here
}).always(() => {
  // something that should always be done regardless of result (hide loading?)
})
```

## Put

```javascript
// Longhand using callback
$.ajax({
  method: 'PUT',
  url: url,
  data: data,
  success: (data) => {
    // handle success here
  },
  error: () => {
    // handle failure here
  },
}).always(() => {
  // something that should always be done regardless of result (hide loading?)
})

// Longhand using promises
$.ajax({
  method: 'PUT',
  url: url,
  data: data
}).done(() => {
  // handle success here
}).fail(() => {
  // handle failure here
}).always(() => {
  // something that should always be done regardless of result (hide loading?)
})
```

## Delete

```javascript
// Longhand using callback
$.ajax({
  method: 'DELETE',
  url: url,
  data: data,
  success: (data) => {
    // handle success here
  },
  error: () => {
    // handle failure here
  },
}).always(() => {
  // something that should always be done regardless of result (hide loading?)
})

// Longhand using promises
$.ajax({
  method: 'DELETE',
  url: url,
  data: data
}).done(() => {
  // handle success here
}).fail(() => {
  // handle failure here
}).always(() => {
  // something that should always be done regardless of result (hide loading?)
})
```
