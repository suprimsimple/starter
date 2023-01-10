<?php
/**
 * Simple plugin for Craft CMS 3.x
 *
 * This is another awesome plugin crafted by Simple ❤️.
 *
 * @link      https://simple.com.au
 * @copyright Copyright (c) 2019 Simple Integrated Marketing
 */

namespace simple\simple\variables;

use simple\simple\Simple;

use Craft;

/**
 * @author    Simple Integrated Marketing
 * @package   Simple
 * @since     1.0.0
 */
class SimpleVariable
{
    // Public Methods
    // =========================================================================

    /**
     * @param null $optional
     * @return string
     */
    public function exampleVariable($optional = null)
    {
        $result = "And away we go to the Twig template...";
        if ($optional) {
            $result = "I'm feeling optional today...";
        }
        return $result;
    }
}
