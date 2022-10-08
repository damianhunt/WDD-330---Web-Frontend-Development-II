const form = document.forms['search'];
const input = form.searchInput

//<button type='submit'>Submit</button>
//<input type='submit' value='Submit'>
//<input type='image' src='button.png'></input>

//<button type='reset'>Reset</button>
//form.action = '/an/other.url'


//input.addEventListener('focus', () => alert('focused'), false);

//input.addEventListener('blur', () => alert('blurred'), false);
const button = form.button

form.addEventListener ('submit', search, false);

function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}