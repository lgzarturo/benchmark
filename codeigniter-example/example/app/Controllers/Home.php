<?php namespace App\Controllers;

class Home extends BaseController
{
	public function index($name = 'World!')
	{
		$data = [
			'greeting' => "Hello " . $name
		];

		return $this->response->setJSON($data);
	}

	//--------------------------------------------------------------------

}
