<?php

namespace Out\Includes\BlockStyles;

// is possible to register in separate json file with the styles as well 
// Add link button with arrow to the left
register_block_style(
   'core/button',
   array(
      'name'    => 'button-black',
      'label'   => __('Black Button', "out"),
   )
);
register_block_style(
   'core/button',
   array(
      'name'    => 'button-white',
      'label'   => __('White Button', "out"),
   )
);

