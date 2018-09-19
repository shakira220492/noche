<?php

namespace EditLyricsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('@EditLyrics/Default/index.html.twig');
    }
}
