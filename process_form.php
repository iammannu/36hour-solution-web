<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the submitted blog title and content
    $blogTitle = $_POST["blogTitle"];
    $blogContent = $_POST["blogContent"];

    // Create a unique identifier for each blog entry
    $blogId = uniqid();

    // Create a new blog file
    $blogFileName = "blogs/blog_" . $blogId . ".txt";
    $blogFile = fopen($blogFileName, "w");

    if ($blogFile) {
        // Write the blog content to the file
        fwrite($blogFile, "Title: " . $blogTitle . "\n\n");
        fwrite($blogFile, "Content:\n" . $blogContent);

        // Close the file
        fclose($blogFile);

        // Redirect to the main page after submission
        header("Location: blogging-service.html");
        exit(); // Ensure that no further code is executed after the header redirection
    } else {
        // Display an error message if unable to create the blog file
        die("Unable to create blog file.");
    }
}
?>
