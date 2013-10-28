<?php
namespace SarUserTest\Model;

use SarUser\Model\UserTable;
use Zend\Db\ResultSet\ResultSet;
use PHPUnit_Framework_TestCase;

/**
 * Class UserTableTest
 * @package SarUserTest\Model
 * Test if it's possible to retrieve users from the user table
 */
class UserTableTest extends PHPUnit_Framework_TestCase
{
    public function testFetchAllReturnsAllUsers()
    {
        $resultSet        = new ResultSet();
        $mockTableGateway = $this->getMock('Zend\Db\TableGateway\TableGateway',
            array('select'), array(), '', false);
        $mockTableGateway->expects($this->once())
            ->method('select')
            ->with()
            ->will($this->returnValue($resultSet));

        $userTable = new UserTable($mockTableGateway);

        $this->assertSame($resultSet, $userTable->fetchAll());
    }
}