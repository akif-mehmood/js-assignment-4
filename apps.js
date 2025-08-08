var name, age, country;
    var legal = "$name, _value, user1, fullName, jsVariable";
    var illegal = "1user, #hash, var, alert, user-name";

    
    document.writeln("<h1>Rules for naming JS variables</h1>");

    document.writeln(`${legal} <br>`); 
    document.writeln(illegal);

    document.writeln("<p>Variable names can only contain letters, <b>numbers, $ and _. <br>For example: <code>$my_1stVariable</code></b></p>");
    document.writeln("<p>Variables must begin with a letter, $ or _. <br>For example: <code>$name, _name or name</code></p>");
    document.writeln("<p>Variable names are <b>case sensitive</b></p>");
    document.writeln("<p>Variable names should not be <b>JS keywords</b></p>");