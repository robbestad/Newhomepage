<?php
/**
 * Sven Anders Robbestad @ 2013
 *
 * @license   http://creativecommons.org/publicdomain/zero/1.0/legalcode CC0 1.0 Universal
 */

namespace SarUser\Controller;
use SarUser\Service\SecureHash,
    SarUser\Service\SecureHashSha,
    Zend\Mvc\Controller\AbstractActionController,
    Zend\View\Model\ViewModel,
    SarUser\Form\LoginForm,
    SarUser\Model\Login;


class IndexController extends AbstractActionController
{

    protected $_username="";
    protected $_password="";
    protected $userTable;
/*
    public function getUserTable()
    {
        if (!$this->userTable) {
            $sm = $this->getServiceLocator();
            $this->userTable = $sm->get('SarUser\Model\UserTable');
        }
        $this->userTable = $sm->get('SarUser\Model\UserTable');
        return $this->userTable;
    }
*/

    private function verifyUserData()
    {
        //$secureHash=new secureHash();
        $secureHash=new secureHashSha();

        $sm = $this->getServiceLocator();
        $userTable=$sm->get('SarUser\Model\UserTable');
        $username=$userTable->getUserByUsername($this->_username)["Login"];
        $hashedPassword=$userTable->getUserByUsername($this->_username)["Login"];
        $salt=$userTable->getUserByUsername($this->_username)["Salt"];


        $hash=$secureHash->returnHash($this->_password);
        try{
            //return $secureHash->verifyHash($hashedPassword,$hash) ?  true:false;
            return $secureHash->verifyHash($this->_password,$hash,$salt) ?  true:false;

        } catch (Exception $e) {
            echo 'Caught exception: ',  $e->getMessage(), "\n";
        }

    }

    public function loginAction()
    {
        $form = new LoginForm();
        $form->get('submit')->setAttribute('value', 'Add');

        $request = $this->getRequest();
        if ($request->isPost()) {
            $login = new Login();
            $form->setInputFilter($login->getInputFilter());
            $form->setData($request->getPost());
            if ($form->isValid()) {
                $login->exchangeArray($form->getData());


                // verify match between username & password
                $this->_password=$form->getData()['password'];
                $this->_username=$form->getData()['username'];

                if($this->verifyUserData()){
                    $_SESSION["loggedIn"]=true;
                    //echo "<h6>Password OK</h6>";
                    //return $this->redirect()->toRoute('/');
                } else {
                    //return $this->redirect()->toRoute('/user');

                    $viewModel = new ViewModel();
                    $viewModel->setTemplate("login");
                    return $viewModel->setVariables(array(
                        "feedback" => "Password mismatch",
                         'form' => $form
                    ));


                }
                //$this->getAlbumTable()->saveAlbum($album);
            }
        }

        return array('form' => $form);
    }

    public function addAction()
    {
        return new ViewModel();
    }


    public function indexAction()
    {
        $request = $this->getRequest();
        if ($request->isPost()) {
            var_dump($request->getContent());
            }
        $hash="";
        $inputPassword="";
        $secureHash=new secureHash();
        $letters=array("a","b","c","d","e","f","g","?","$","@","%","#","h","i","j","k","l","m",
            "n","o","p","q","r","s","t","u","w","x","y","z","(",")","!");
        for($i=0;$i<16;$i++){
            $inputPassword.=$letters[rand(0,count($letters)-1)];
        }

        try{
            $hash=$secureHash->returnHash($inputPassword);
            //echo "The following hash was generated: $hash \n";

        } catch (Exception $e) {
            echo 'Failed, function threw exception: ',  $e->getMessage(), "\n";
        }



        /*
        * Verification
        *
        * Verification is as simple as calling the class
        * and passing the submitted password and the hash
        * If the hash matches, the function returns true
        */

        $secureHash=new secureHash();
        $verifyPassword=$inputPassword;

        try{
            $verification= $secureHash->verifyHash($verifyPassword,$hash) ?  "Passed verification\n" :  "Verification failed\n";

        } catch (Exception $e) {
            echo 'Caught exception: ',  $e->getMessage(), "\n";
        }


        //return $this->redirect()->toRoute('login');

        $viewModel = new ViewModel();
        $viewModel->setTemplate("login");
        return $viewModel->setVariables(array(
            "pass" => $inputPassword,
            "hash" => $hash,
            "verification" => $verification
        ));
        /*

        $viewModel = new ViewModel();
        $viewModel->setTemplate("nybruker");

        $viewModel->setTemplate("login");

        //$viewModel->setTemplate("status");

        return $viewModel->setVariables(array(
            "pass" => $inputPassword,
            "hash" => $hash,
            "verification" => $verification
        ));
        */


    }


}
