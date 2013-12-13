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
    Application\Model\PageData,
    Application\Model\Application,
    Zend\Http\Request,
    SarMarkdown\Markdown\Markdown,
    TestModule\Module as TestModule;

//    Application\Document\User;


class IndexController extends AbstractActionController
{


    public function getPageData()
    {
        $sm = $this->getServiceLocator();
        $pageData=$sm->get('Application\Model\PageData');
        $footer_text=$pageData->getContentById("footer_text");
        $footer_address=$pageData->getContentById("footer_address");
        $index_text=$pageData->getContentById("index_text");

        return(
            array(
                "footer_text" => $footer_text["text"],
                "footer_address" => $footer_address["text"],
                "index_text" => $index_text["text"]
            )
        );
    }


    /**
     *
     * The main Action file
     */

    public function indexAction()
    {

       $Markdown=new Markdown();


$string="#Velkommen
_italics_ **bold**";

        $viewModel = new ViewModel();
        $viewModel->setVariable("comments",$Markdown($string));
//        return $viewModel;//->setVariables($this->getPageData());
        return $viewModel->setVariables($this->getPageData());
    }

    public function resumeAction()
    {
        $viewModel = new ViewModel();
        return $viewModel->setVariables($this->getPageData());

    }


    public function callbackAction()
    {
        file_put_contents(__DIR__."/../../../../../../data/".strtotime("NOW").".json",file_get_contents('php://input'));
    }

    public function appsAction()
    {

        $app=$this->params()->fromRoute("appname");
        $viewModel = new ViewModel();
        $array=array_merge($this->getPageData(),array("appname",ucfirst($app),"template"=>"application/content/$app.twig"));
        $viewModel->setVariables($array);
        return $viewModel;
    }

    public function gamesAction()
    {
        $app=$this->params()->fromRoute("appname");
        $viewModel = new ViewModel();
        $array=array_merge($this->getPageData(),array("appname",ucfirst($app),"template"=>"application/content/$app.twig"));
        $viewModel->setVariables($array);
        return $viewModel;
    }

    public function showcaseAction()
    {
        $viewModel = new ViewModel();
        return $viewModel->setVariables($this->getPageData());
    }

    public function contactAction()
    {
        $viewModel = new ViewModel();
        return $viewModel->setVariables($this->getPageData());
    }

    public function blogAction()
    {
        $viewModel = new ViewModel();
        return $viewModel->setVariables($this->getPageData());
    }

    public function errorAction()
    {
        $viewModel = new ViewModel();
        return $viewModel->setVariables($this->getPageData());
    }

    public function ajaxsaveAction()
    {
        $id = $this->getRequest()->getPost("id");
        $text = nl2br($this->getRequest()->getPost("text"));

        $sm = $this->getServiceLocator();
        $pageData=$sm->get('Application\Model\PageData');
        $pageData->updateContent($id,$text);

        $viewModel = new ViewModel();
        $viewModel->setTemplate("empty");
        return $viewModel;
    }
}
