> This is a simple React.js Modal component, easy to open and close !

### Demo

[See Demo Here](https://rc-simple-modal.netlify.app)

### Install

```bash
npm i rc-simple-modal
```


### Usage  

```js
import Modal from 'rc-simple-modal';

<Modal
   isOpen={isModalOpen} // Required, use a state to update this
   onClose={() => setIsModalOpen(false)} // Required, when user clicks the X icon on the header
   title='some text' // optional ofc, just adds some text to the header next to the X icon
   isLarge={true || false} // Optional, default is false, will make the modal a bit larger
>

   <p> This is the modal content ! </p>

</Modal>

```
<br />
<br />

**Enjoy !!**
