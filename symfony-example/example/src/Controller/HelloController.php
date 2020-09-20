<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HelloController extends AbstractController
{

	public function index($name = 'World!')
	{
		return $this->json(['greeting' => 'Hello ' . $name]);
	}
}
