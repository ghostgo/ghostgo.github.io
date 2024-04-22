<?php
$source_dir = "C:\Projects\ceavt-html";

$destination_dir = "C:\Projects\ceavt-copy";

recursive_files_copy($source_dir, $destination_dir);

function recursive_files_copy($source_dir, $destination_dir)
{
    // Open the source folder / directory
    $dir = opendir($source_dir);

    // Create a destination folder / directory if not exist
    @mkdir($destination_dir);

    // Loop through the files in source directory
    while ($file = readdir($dir))
    {
        // Skip . and ..
        if (($file != '.') && ($file != '..') && ($file != 'components') && (pathinfo($file, PATHINFO_EXTENSION) != 'php'))
        {
            // Check if it's folder / directory or file
            if (is_dir($source_dir . '/' . $file))
            {
                // Recursively calling this function for sub directory
                recursive_files_copy($source_dir . '/' . $file, $destination_dir . '/' . $file);
            }
            else
            {
                // Copying the files
                copy($source_dir . '/' . $file, $destination_dir . '/' . $file);
            }
        }
        else if ((!is_dir($source_dir . '/' . $file)) && (pathinfo($file, PATHINFO_EXTENSION) == 'php'))
        {
            ob_start();
            include $source_dir . '/' . $file;
            $php_to_html = ob_get_clean();
            $fp = fopen($file, "w");
            fwrite($fp, $php_to_html);
            fclose($fp);
            rename(pathinfo($file, PATHINFO_BASENAME) , pathinfo($file, PATHINFO_FILENAME) . '.html');
        }
    }

    closedir($dir);
    // convertphp();
    
}
?>