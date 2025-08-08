var name, age, country;
    var legal = "$name, _value, user1, fullName, jsVariable";
    var illegal = "1user, #hash, var, alert, user-name";

    
    document.writeln("<h1>Rules for naming JS variables</h1>");

    document.writeln(`${legal} <br>`); 
    document.writeln(illegal);

    document.writeln("<p><b>Variable names can only contain</b> letters, numbers, $ and _. <br>For example: <code>$my_1stVariable</code></p>");
    document.writeln("<p>Variables must begin with a <b>letter, $ or _. <br>For example: <code>$name, _name or name</b></p>");
    document.writeln("<p>Variable names are <b>case sensitive</b></p>");
    document.writeln("<p>Variable names should not be <b>JS keywords</b></p>");