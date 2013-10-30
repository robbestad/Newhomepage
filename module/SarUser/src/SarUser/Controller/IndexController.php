<?php
/**
 * Sven Anders Robbestad @ 2013
 *
 * @license   http://creativecommons.org/publicdomain/zero/1.0/legalcode CC0 1.0 Universal
 */

namespace SarUser\Controller;
use SarUser\Model\Changepassword;
use SarUser\Service\SecureHash,
    SarUser\Service\SecureHashSha,
    Zend\Mvc\Controller\AbstractActionController,
    Zend\View\Model\ViewModel,
    SarUser\Form\LoginForm,
    SarUser\Form\ChangepasswordForm,
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
     * if $userid is given, the table will be updated rather than a new insert
     * @return bool
     */
    private function _saveUser($uname="",$hashpass="",$psalt="",$userid=0)
    {
        $sm = $this->getServiceLocator();
        $userTable=$sm->get('SarUser\Model\UserTable');
        $username= $uname!=""?$uname:$this->_username;
        $hashedPassword= $hashpass!=""?$hashpass:$this->_hashedPassword;
        $salt= $psalt!=""?$psalt:$this->_salt;
        return($userTable->saveUser($username, $hashedPassword, $salt,$userid));
    }

    /**
     * Logs in user and redirects to account route
     */
    private function _logInUserAndRedirectToAccount()
    {
        $_SESSION["loggedIn"]=true;
        $userTable= $this->getServiceLocator()->get('SarUser\Model\UserTable');
        $_SESSION["userid"]=$userTable->getUserByUsername($this->_username)["ID"];
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
        unset($_SESSION["userid"]);

    }

    /**
     * Redirect to account if logged in
     */
    private function _redirectToAccountIfLoggedIn()
    {
        if(!empty($_SESSION["loggedIn"]) && $_SESSION["loggedIn"]===true){
            return $this->redirect()->toUrl("/user/account");
        }
    }

    /**
     * Redirect out of account
     * if user is not logged in
     */
    private function _redirectIfNotLoggedIn()
    {
        if(empty($_SESSION["loggedIn"]) or $_SESSION["loggedIn"]===false){
            return $this->redirect()->toUrl("/user/login");
        }
    }

    /**
     * Verifies that user data is input correctly
     * @return bool
     */
    private function _verifyUserData()
    {
        $userTable=$this->getServiceLocator()->get('SarUser\Model\UserTable');
        $username=$userTable->getUserByUsername($this->_username)["Login"];
        return($this->_verifyUsernameAndPassword($username,$this->_password));
    }

    /**
     * Verify password and username
     */
    private function _verifyUsernameAndPassword($username, $password)
    {
        $secureHash=new secureHashSha();

        $userTable= $this->getServiceLocator()->get('SarUser\Model\UserTable');
        $hashedPassword=$userTable->getUserByUsername($username)["Password"];
        $salt=$userTable->getUserByUsername($username)["Salt"];
        try{
            return $secureHash->verifyHash($password,$hashedPassword,$salt);
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
        $this->_redirectToAccountIfLoggedIn();

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
                        "feedback" => "Username or password is wrong...",
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
        $this->_redirectToAccountIfLoggedIn();

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
        $this->_redirectToAccountIfLoggedIn();

        $form = new ChangepasswordForm();
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
        $this->_redirectToAccountIfLoggedIn();
    }

    private function _isPasswordValid($pwd)
    {
        $score=0;
        $status=strlen($pwd)>5?true:false;
        if(!$status) return $status;

        $score++;

        if (preg_match("/[a-zæøå]/", $pwd) && preg_match("/[A-ZÆØÅ]/", $pwd))
        {
            $score++;
        }
        if (preg_match("/[0-9]/", $pwd))
        {
            $score++;
        }
        if (preg_match("/.[!,@,#,$,%,^,&,*,?,_,~,-,£,(,)]/", $pwd))
        {
            $score++;
        }

        return($score<3?true:false);

    }



    public function changepasswordAction()
    {

        $this->_redirectIfNotLoggedIn();


        $form = new ChangepasswordForm();
        //$form->get('submit')->setAttribute('value', 'Add');

        $request = $this->getRequest();
        if ($request->isPost()) {
            $changepassword = new Changepassword();
            $form->setInputFilter($changepassword->getInputFilter());
            $form->setData($request->getPost());

            if ($form->isValid()) {
                $changepassword->exchangeArray($form->getData());

                // verify match between username & password
                $this->_password0=$form->getData()['password0'];
                $this->_password1=$form->getData()['password1'];
                $this->_password2=$form->getData()['password2'];

                // verify existing password

//                $this->_username=$form->getData()['username'];

                if($this->_verifyUsernameAndPassword($_SESSION["username"],$this->_password0)){
                    echo "password OK";
                }
                if($this->_isPasswordValid($this->_password1)
                    and (
                    $this->_password1 === $this->_password2
                    )){
                    echo ", and new passwords are OK";
                    $secureHash=new secureHashSha();
                    $hash=$secureHash->returnHash($this->_password1);
                    $this->_salt=$hash[0];
                    $this->_hashedPassword=$hash[1];

                    // save user and return to logged in
                    $this-> _saveUser($_SESSION["username"],$hash[1],$hash[0],$_SESSION["userid"]);

                    $this->_logInUserAndRedirectToAccount();

                } else {
                    echo ", but new ones are not strong enough";
                    $viewModel = new ViewModel();
                    $viewModel->setTemplate("sar-user/index/changepassword");
                    return $viewModel->setVariables(array(
                        "feedback" => "Vennligst angi et sikrere passord",
                        "passord0" => $this->_password0,
                        "passord1" => $this->_password1,
                        "passord2" => $this->_password2,
                        'form' => $form
                    ));
                }

            }
        }

        return array('form' => $form);

    }


}
