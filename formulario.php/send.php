<?php
// Incluir el archivo de conexión
include("conexion.php");

// Verificar si se ha enviado el formulario
if(isset($_POST['send'])){
    // Verificar que los campos no estén vacíos
    if (
        !empty($_POST['name']) &&
        !empty($_POST['password']) &&
        !empty($_POST['email'])
    ) {
        // Obtener y limpiar los valores del formulario
        $name = trim($_POST['name']);
        $password = trim($_POST['password']);
        $email = trim($_POST['email']);

        // Evitar inyecciones SQL utilizando consultas preparadas
        $consulta = $conex->prepare("INSERT INTO datos (nombre, contraseña, email) VALUES (?, ?, ?)");
        $consulta->bind_param("sss", $name, $password, $email);

        // Ejecutar la consulta
        $resultado = $consulta->execute();

        // Verificar el resultado de la consulta
        if($resultado){
            // Cerrar la consulta preparada
            $consulta->close();

            // Redirigir a servicios.html
            header("Location: /proyectofinal/proyectofinal/ciber.html");
            exit(); // Asegura que el script se detenga después de la redirección
        } else {
            ?>
            <h3 class="error">Ocurrió un error</h3>
            <?php
        }

        // Cerrar la consulta preparada
        $consulta->close();

    } else {
        ?>
        <h3 class="error">Llenar todos los campos</h3>
        <?php
    }
}
?>
