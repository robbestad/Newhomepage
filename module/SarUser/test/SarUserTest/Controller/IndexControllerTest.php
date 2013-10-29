<?php
namespace SarUserTest\Controller;

use Zend\Test\PHPUnit\Controller\AbstractHttpControllerTestCase,
    SarUser\Controller\IndexController,
    SarUser\Model\UserTable,
    SarUser\Model\Login;


/**
 * Class IndexControllerTest
 * @package SarUserTest\Controller
 * Test if routing can be accessed
 */

class IndexControllerTest extends AbstractHttpControllerTestCase
{
    protected $traceError = true;

    protected $controller;
    public function setUp()
    {
        $this->setApplicationConfig(
            require  '/Users/svenanders/zend/robbis4/current/module/SarUser/test/application.config.php'
        );
        parent::setUp();

       // $this->controller=new IndexController();
        /*
         require  '../../../init_autoloader.php';
        $testConfig = include  '../../../config/test/application.config.php';
        $this->setApplicationConfig($testConfig);

        parent::setUp();
*/

    }

    public function testApplicationConfigExists()
    {
        $this->assertFileExists(  'application.config.php');
    }


    public function testUserActionCanBeAccessed()
    {
        $userTableMock = $this->getMockBuilder('SarUser\Model\UserTable')
            ->disableOriginalConstructor()
            ->getMock();
        $userTableMock->expects($this->once())
            ->method('fetchAll')
            ->will($this->returnValue(array()));
        $serviceManager = $this->getApplicationServiceLocator();
        $serviceManager->setAllowOverride(true);
        $serviceManager->setService('SarUser\Model\UserTable', $userTableMock);

        //$this->controller->dispatch('/user');
        //$this->assertMatchedRouteName('user');
        //      $this->assertResponseStatusCode(200);
//
//        $this->dispatch('/user');
//        $this->assertResponseStatusCode(200);
        /*
        $this->assertModuleName('saruser');
        $this->assertControllerName('saruser_index');
        $this->assertControllerClass('IndexController');
        $this->assertMatchedRouteName('user');
        */
    }
}