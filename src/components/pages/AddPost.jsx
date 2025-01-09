import React from 'react';
import {Container} from '../index.js';
import Postform from '../post-form/PostForm.jsx';

function AddPost() {
  return (
    <div className='py-8'>
      <Container>
        <Postform/>
      </Container>
    </div>
  )
}

export default AddPost