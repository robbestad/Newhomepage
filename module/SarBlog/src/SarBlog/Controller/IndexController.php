<?php
/**
 * Sven Anders Robbestad @ 2013
 *
 * @license   http://creativecommons.org/publicdomain/zero/1.0/legalcode CC0 1.0 Universal
 */

namespace SarBlog\Controller;
use SarBlog\Model\BlogTable,
    Zend\Mvc\Controller\AbstractActionController,
    Zend\View\Model\ViewModel,
    Zend\Db\Sql;


class IndexController extends AbstractActionController
{

   public function indexAction()
   {
       $sm = $this->getServiceLocator();
       $blogtable=$sm->get('SarBlog\Model\BlogTable');
       $viewModel= new ViewModel();
       $viewModel->setVariable("blogposts",$blogtable->getBlogPosts(20,0));
       return $viewModel;
   }

}
