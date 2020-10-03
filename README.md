> This is a simple React.js Modal component, easy to open and close !

### Install

```bash
npm i react-simple-modal
```


### Usage  

```bash
import Modal from 'react-simple-modal';

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
