<root>
<?php if (is_array($message)): ?>
<?php   foreach ($message as $msg): ?>
<error><?php echo text::xmlData($msg) ?></error>
<?php   endforeach ?>
<?php else: ?>
<error><?php echo text::xmlData($message) ?></error>
<?php endif ?>
</root>
