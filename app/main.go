package main

import (
	"go_fiber/app/database"
	"go_fiber/app/routes"

	"github.com/gofiber/fiber/v2"
)

func main() {
	database.Connect()
	app := fiber.New()
	routes.Setup(app)
	app.Listen(":3000")
}
