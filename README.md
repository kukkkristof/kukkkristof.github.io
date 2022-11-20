<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="mainFunctions.js"></script>
    <link rel="stylesheet" href="mainStyles.css">
    <link rel="stylesheet" href="sidebar.css">
    <link rel="stylesheet" href="customTable.css">
    <title>Kukk Kristóf ME</title>
</head>
<body>
    <nav id="sidebar">
        <button onclick="viewPage('home')">Főoldal</button>
        <button onclick="viewPage('projects')">Projekt munkák</button>
        <button onclick="viewPage('analizis')">Matematikai analízis</button>
        <button onclick="viewPage('szartek')">Számítógép Architektúra</button>
    </nav>
    <div id="sideContainer">
        <div id="home" class="sidePanel active">
            <h1>Főoldal</h1>
        </div>
        <div id="projects" class="sidePanel">
            <h1>Projekt munkák</h1>
            <div class="tableCont">
                <div class="cont1"></div>
                <div class="cont1"></div>
                <div class="cont1"></div>
                <div class="cont1"></div>
                <div class="cont1"></div>
                <div class="cont1"></div>
                <div class="cont1"></div>
                <div class="cont1"></div>
                <div class="cont1"></div>
                <div class="cont1"></div>
            </div>
        </div>
        <div id="analizis" class="sidePanel">
            <h1>Matematikai analízis</h1>
        </div>
        <div id="szartek" class="sidePanel">
            <h1>Számítógép Architektúra</h1>
        </div>
    </div>
</body>
</html>
