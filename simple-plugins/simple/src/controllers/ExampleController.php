<?php
/**
 * Simple plugin for Craft CMS 3.x
 *
 * This is another awesome plugin crafted by Simple ❤️.
 *
 * @link      https://simple.com.au
 * @copyright Copyright (c) 2019 Simple Integrated Marketing
 */

namespace simple\simple\controllers;

use simple\simple\Simple;

use Craft;
use craft\web\Controller;

/**
 * @author    Simple Integrated Marketing
 * @package   Simple
 * @since     1.0.0
 */
class ExampleController extends Controller
{

    // Protected Properties
    // =========================================================================

    /**
     * @var    bool|array Allows anonymous access to this controller's actions.
     *         The actions must be in 'kebab-case'
     * @access protected
     */
    protected $allowAnonymous = ['index', 'do-something'];

    // Public Methods
    // =========================================================================

    /**
     * @return mixed
     */
    public function actionIndex()
    {
        $result = 'Welcome to the ExampleController actionIndex() method';

        return $result;
    }

    /**
     * @return mixed
     */
    public function actionDoSomething()
    {
        $result = 'Welcome to the ExampleController actionDoSomething() method';

        return $result;
    }
}
