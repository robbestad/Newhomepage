<?php
/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2012 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Application\Controller;
use Zend\Mvc\Controller\AbstractActionController,
    Zend\View\Model\ViewModel,
    Application\Model\Application;
//    Application\Document\User;


class IndexController extends AbstractActionController
{


    protected $documentManager;

    public function setDocumentManager(DocumentManager $documentManager)
    {
        $this->documentManager = $documentManager;
        return $this;
    }

    public function myVal(){
        return "10";
    }


    /**
     *
     * The main Action file
     */

    public function indexAction()
    {
        //Throw new \Exception("feil?!");
        //$dm = $this->getServiceLocator()->get('doctrine.documentmanager.odm_default');
        /* $dm = $this->getLocator()->get('mongo_dm');

         $user = new User();
         $user->setName('Bulat S.');

         $dm->persist($user);
         $dm->flush();
        */

        $id="10";

        $viewModel = new ViewModel();
        return $viewModel->setVariables(array(
            "a" => "b"
        ));
    }

    public function resumeAction()
    {
        return new ViewModel();
    }


    public function callbackAction()
    {
        $data = json_decode(file_get_contents('php://input'), TRUE);
        $text = print_r($data,true);
        file_put_contents(__DIR__."/../../../../../../data/".strtotime("NOW").".json",$text);
    }


    public function showcaseAction()
    {
        return new ViewModel();
    }

    public function contactAction()
    {
        return new ViewModel();
    }

    public function blogAction()
    {
        return new ViewModel();
    }




}
