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
            require  'application.config.php'
        );
        parent::setUp();
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
        /*
        $userTableMock->expects($this->once())
            ->method('fetchAll')
            ->will($this->returnValue(array()));
        */
        $serviceManager = $this->getApplicationServiceLocator();
        $serviceManager->setAllowOverride(true);
        $serviceManager->setService('SarUser\Model\UserTable', $userTableMock);

        $this->dispatch('/user');
        $this->assertMatchedRouteName('saruser-route');
        $this->assertResponseStatusCode(200);

        $this->assertControllerName('saruser');
        $this->assertControllerClass('IndexController');
    }


}