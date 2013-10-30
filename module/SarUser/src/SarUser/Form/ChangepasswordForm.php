<?php
namespace SarUser\Form;

use Zend\Form\Form;

class ChangepasswordForm extends Form
{
    public function __construct($name = null)
    {
        // we want to ignore the name passed
        parent::__construct('changepassword');
        $this->setAttribute('method', 'post');
        $this->add(array(
            'name' => 'password0',
            'attributes' => array(
                'type'  => 'password',
                'class' => 'input-small',
                'placeholder' => 'Existing password',
            ),
        ));

        $this->add(array(
            'name' => 'password1',
            'attributes' => array(
                'type'  => 'password',
                'class' => 'input-small',
                'placeholder' => 'New password',
            ),
        ));

        $this->add(array(
            'name' => 'password2',
            'attributes' => array(
                'type'  => 'password',
                'class' => 'input-small',
                'placeholder' => 'Repeat new password',
            ),
        ));


        $this->add(array(
            'name' => 'submit',
            'attributes' => array(
                'type'  => 'submit',
                'value' => 'Logg inn',
                'id' => 'submitbutton',
                'class' => 'btn',
            ),
        ));
    }
}