package database

import (
	"go_fiber/app/models"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func Connect() {
	connection, err := gorm.Open(mysql.Open("root:root@tcp(localhost:3306)/go_jwt"), &gorm.Config{})
	if err != nil {
		panic("Could not connect to the database")
	}
	connection.AutoMigrate(&models.User{})
}
