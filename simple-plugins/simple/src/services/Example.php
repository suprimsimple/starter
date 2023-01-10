<?php
/**
 * Simple plugin for Craft CMS 3.x
 *
 * This is another awesome plugin crafted by Simple ❤️.
 *
 * @link      https://simple.com.au
 * @copyright Copyright (c) 2019 Simple Integrated Marketing
 */

namespace simple\simple\services;

use simple\simple\Simple;

use Craft;
use craft\base\Component;

/**
 * @author    Simple Integrated Marketing
 * @package   Simple
 * @since     1.0.0
 */
class Example extends Component
{
    // Public Methods
    // =========================================================================

    /*
     * @return mixed
     */
    public function exampleService()
    {
        $result = 'something';

        return $result;
    }
}
