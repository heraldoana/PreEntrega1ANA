function bienvenido() {
    alert("Bienvenido/a primero vamos a crear tu usuario")
}
bienvenido()

function credito() {
    totalCredito = total + ((10 * total) / 100)
    alert("Usted eligio pagar con tarjeta de credito, el total a pagar es $ " + totalCredito)
}

function debito() {
    alert("Usted eligio pagar con tarjeta de debito, el total a pagar es $ " + total)
}

let usuario = prompt("Ingrese usuario").toUpperCase()
let contrasenia = prompt("Ingrese contraseña")

usuario !== " "

let contador = 0
let opcion
let total = 0
let totalCredito = 0

do {
    alert("Ahora vamos a validar sus datos ingresados anteriormente")
    usuarioBD = prompt("Ingrese nuevamente su usuario anterior").toUpperCase()
    contraseniaBD = prompt("Ingrese nuevamente su contraseña anterior")
    contador++
    if (usuario === usuarioBD && contrasenia === contraseniaBD) {
        do {
            opcion = Number(prompt("Bienvenido/a " + usuario + " elija una de las siguientes opciones\n1 - Compra de EPP\n2 - Servicio de control documental\n3 - Servicio de Higiene y seguridad\n4 - Salir "))
            switch (opcion) {
                case 1:
                    alert("Usted eligio el sector compras de EPP")
                    do {
                        opcionVenta = Number(prompt(usuario + " elija alguno de los siguientes EPP para añadir al carrito\n1 - Barbijo unid. $500\n2 - Mameluco unid $700\n3 - Gafas unid. $200\n4 - Casco unid. $1000\n5 - Finalizar compra\n0 - Volver al menu anterior"))
                        switch (opcionVenta) {
                            case 1:
                                barbijo = Number(prompt("Ingrese cantidad de barbijos"))
                                if (isNaN(barbijo)) {
                                    alert("Debe ingresar numero")
                                } else {
                                    alert("usted agrego " + barbijo + " barbijos al carrito")
                                    total += 500 * barbijo
                                }
                                break
                            case 2:
                                mameluco = Number(prompt("Ingrese cantidad de mamelucos"))
                                if (isNaN(mameluco)) {
                                    alert("Debe ingresar numero")
                                } else {
                                    alert("usted agrego " + mameluco + " mamelucos al carrito")
                                    total += 700 * mameluco
                                }
                                break
                            case 3:
                                gafas = Number(prompt("Ingrese cantidad de gafas"))
                                if (isNaN(gafas)) {
                                    alert("Debe ingresar numero")
                                } else {
                                    alert("usted agrego " + gafas + " gafas al carrito")
                                    total += 200 * gafas
                                }
                                break
                            case 4:
                                casco = Number(prompt("Ingrese cantidad de cascos"))
                                if (isNaN(casco)) {
                                    alert("Debe ingresar numero")
                                } else {
                                    alert("usted agrego " + casco + " cascos al carrito")
                                    total += 1000 * casco
                                }
                                break
                            case 5:
                                alert("El total a pagar es $ " + total)
                                let finalizar = prompt("¿Desea finalizar la compra? Si o No").toLowerCase()
                                if (finalizar === "si") {
                                    do {
                                        opcionPago = Number(prompt("Eliga come desea pagar \n1 - Debito \n2 - Credito\n0 - Volver al menu anterior"))
                                        switch (opcionPago) {
                                            case 1:
                                                debito()
                                                break
                                            case 2:
                                                credito()
                                                break
                                            default:
                                                break
                                        }
                                    } while (opcionPago !== 0)
                                    break
                                }
                            default:
                                break
                        }
                    } while (opcionVenta != 0)
                    break
                case 2:
                    alert("Usted eligio el area de control documental el cual se encuentra en mantenimiento")
                    break
                case 3:
                    alert("Usted eligio el area de Higiene y Seguridad el cual se encuentra en mantenimiento")
                default:
                    break
            }
        } while (opcion != 4)
        alert("Muchas gracias")
        break
    } else {
        alert("Usuario y/o contraseña incorrecto/s")
    }
} while (contador < 3)

if (contador === 3) {
    alert("Agotaste tus intentos")
} 
