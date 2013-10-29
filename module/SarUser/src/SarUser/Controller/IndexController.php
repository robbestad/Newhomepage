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
    SarUser\Model\Login,
    SarUser\Model\Register;


class IndexController extends AbstractActionController
{

    protected $_username="";
    protected $_password="";
    protected $_hashedPassword="";
    protected $_salt="";
    protected $userTable;

    /**
     * Saves a new user
     * @return bool
     */
    private function _saveUser()
    {
        $sm = $this->getServiceLocator();
        $userTable=$sm->get('SarUser\Model\UserTable');
        return($userTable->saveUser($this->_username, $this->_hashedPassword, $this->_salt));
    }

    /**
     * Logs in user and redirects to account route
     */
    private function _logInUserAndRedirectToAccount()
    {
        $_SESSION["loggedIn"]=true;
        $_SESSION["username"]=$this->_username;
        return $this->redirect()->toUrl("/user/account");

    }

    /**
     * Logs in user and redirects to home page
     */
    private function _logOutAndRemoveSessionData()
    {
        $_SESSION["loggedIn"]=false;
        unset($_SESSION["username"]);
        unset($_SESSION["name"]);

    }



    /**
     * Verifies that user data is input correctly
     * @return bool
     */
    private function _verifyUserData()
    {
        $secureHash=new secureHashSha();
        $sm = $this->getServiceLocator();
        $userTable=$sm->get('SarUser\Model\UserTable');
        $username=$userTable->getUserByUsername($this->_username)["Login"];
        $hashedPassword=$userTable->getUserByUsername($this->_username)["Password"];
        $this->_salt=$userTable->getUserByUsername($this->_username)["Salt"];
        $this->_hashedPassword=$hashedPassword;
        try{
            return $secureHash->verifyHash($this->_password,$hashedPassword,$this->_salt);
        } catch (Exception $e) {
            echo 'Caught exception: ',  $e->getMessage(), "\n";
        }
    }


    /**
     * Verifies that a chosen username is unique
     * @return bool
     */
    private function _verifyThatUserNameIsUnique($username)
    {
        if($this->getServiceLocator()->get('SarUser\Model\UserTable')->getUserByUsername($this->_username)["Login"]){
          return false;
        }

        return true;
    }


    /**
     * Screen for logging in the user
     * @return array|ViewModel
     */
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

                if($this->_verifyUserData()){
                    $this->_logInUserAndRedirectToAccount();

                } else {
                    $viewModel = new ViewModel();
                    $viewModel->setTemplate("sar-user/index/login");
                    return $viewModel->setVariables(array(
                        "feedback" => "Password mismatch",
                        "brukernavn" => $this->_username,
                        "passord" => $this->_password,

                        'form' => $form
                    ));
                }
            }
        }

        return array('form' => $form);
    }

    public function addAction()
    {
        return new ViewModel();
    }

    public function userAction()
    {
        return new ViewModel();
    }


    public function logoutAction()
    {
        $this->_logOutAndRemoveSessionData();
        return $this->redirect()->toUrl("/");

    }


    public function accountAction()
    {
        return new ViewModel();
    }


    public function registerAction()
    {

        $form = new LoginForm();
        $form->get('submit')->setAttribute('value', 'Add');

        $request = $this->getRequest();
        if ($request->isPost()) {
            $login = new Register();
            $form->setInputFilter($login->getInputFilter());
            $form->setData($request->getPost());
            if ($form->isValid()) {
                $login->exchangeArray($form->getData());


                // verify match between username & password
                $this->_password=$form->getData()['password'];
                $this->_username=$form->getData()['username'];

                if($this->_verifyThatUserNameIsUnique($this->_username)){
                    $secureHash=new secureHashSha();
                    $hash=$secureHash->returnHash($this->_password);
                    $this->_salt=$hash[0];
                    $this->_hashedPassword=$hash[1];

                    // save user and return to logged in
                   $this->_saveUser();
                   $this->_logInUserAndRedirectToAccount();

                } else {
                    $viewModel = new ViewModel();
                    $viewModel->setTemplate("sar-user/index/register");
                    return $viewModel->setVariables(array(
                        "feedback" => "Brukernavnet finnes fra før",
                        "brukernavn" => $this->_username,
                        "passord" => $this->_password,
                        'form' => $form
                    ));
                }

            }
        }

        return array('form' => $form);
    }


    public function indexAction()
    {


    }


}
