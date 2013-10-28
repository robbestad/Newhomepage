<?php
namespace SarUser\Form;

use Zend\Form\Form;

class LoginForm extends Form
{
    public function __construct($name = null)
    {
        // we want to ignore the name passed
        parent::__construct('login');
        $this->setAttribute('method', 'post');
        $this->setAttribute('class', 'well form-inline');
        $this->add(array(
            'name' => 'username',
            'attributes' => array(
                'type'  => 'text',
                'class' => 'input-small',
                'placeholder' => 'Email',
            ),
                /*
            'options' => array(
                'label' => 'Username',
            ),
            */
        ));
        $this->add(array(
            'name' => 'password',
            'attributes' => array(
                'type'  => 'password',
                'class' => 'input-small',
                'placeholder' => 'Password',
            ),
                /*
            'options' => array(
                'label' => 'Password',
                'label_attributes' => array(
                    'class'=>'',
                ),
            ),
                */
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