<?php

namespace SarBlog\Model;

use Zend\Db\TableGateway\TableGateway;
use Zend\Db\Sql;
use Zend\ServiceManager\ServiceLocatorAwareInterface;
use Zend\ServiceManager\ServiceLocatorInterface;

class BlogTable
    implements ServiceLocatorAwareInterface
{
    protected $tableGateway;
    protected $config;
    protected $_serviceLocator;

    public function setServiceLocator(ServiceLocatorInterface $serviceLocator)
    {
        $this->_serviceLocator = $serviceLocator;
    }

    function getServiceLocator()
    {
        return $this->_serviceLocator;
    }

    public function __construct(TableGateway $tableGateway)
    {
        $this->tableGateway = $tableGateway;
    }

    public function fetchAll()
    {
        $resultSet = $this->tableGateway->select();
        return $resultSet;

    }



    public function getBlogPosts($limit=1,$offset=0)
    {
        $serviceLocator = $sm = $this->getServiceLocator();
        $dbAdapter      = $serviceLocator->get('Zend\Db\Adapter\Adapter');
        $sql = new Sql\Sql($dbAdapter);

        $select = new Sql\Select('blog');

        $select
            ->order('Date_added')
            ->limit($limit)
            ->offset($offset);

        $sqlString=$sql->getSqlStringForSqlObject($select);
        $results = $dbAdapter->query($sqlString, $dbAdapter::QUERY_MODE_EXECUTE);
        $dataset=array();
        foreach($results as $var){
            $dataset[]=$var;
        }
        return $dataset;
    }


    public function getUserById($id)
    {
        $id  = (int) $id;
        $rowset = $this->tableGateway->select(array('ID' => $id));
        $row = $rowset->current();
        if (!$row) {
            return false;
            //throw new \Exception("Could not find row $id");
        }
        return $row;
    }

    public function getUserByUsername($username)
    {
        $username  = (string) $username;
        $rowset = $this->tableGateway->select(array('Login' => $username));
        $row = $rowset->current();
        if (!$row) {
            return false;
            //throw new \Exception("Could not find row $username");
        }
        return $row;
    }


}