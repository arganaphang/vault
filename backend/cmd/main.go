package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	fiber "github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/jmoiron/sqlx"
	_ "github.com/mattn/go-sqlite3"

	_ "github.com/arganaphang/vault/backend/docs"
	"github.com/arganaphang/vault/backend/pkg/scalar"
)

// @title Vault API
// @version 1.0
// @description This is a server for a vault API.
// @contact.name Argana Phangquestian
// @contact.email arganaphangquestian@gmail.com
// @license.name MIT License
// @license.url https://mit-license.org/
// @host localhost:8000
// @BasePath /
func main() {
	app := fiber.New()
	app.Use(cors.New())

	app.Get("/healthz", getHealthz)
	app.Get("/docs", func(ctx *fiber.Ctx) error {
		htmlContent, err := scalar.ApiReferenceHTML(&scalar.Options{
			SpecURL: "./docs/swagger.json",
			CustomOptions: scalar.CustomOptions{
				PageTitle: "Wallet API",
			},
			DarkMode: true,
		})
		if err != nil {
			return ctx.Status(http.StatusInternalServerError).JSON(map[string]any{})
		}

		ctx.Set(fiber.HeaderContentType, fiber.MIMETextHTML)

		return ctx.Status(http.StatusOK).SendString(htmlContent)
	})

	db, err := sqlx.Open(
		"sqlite3",
		fmt.Sprintf("file:%s", os.Getenv("DATABASE_URL")),
	)
	if err != nil {
		log.Fatalln("failed to open database connection", err.Error())
	}
	if err := db.Ping(); err != nil {
		log.Fatalln("failed to ping database", err.Error())
	}

	if err := app.Listen("0.0.0.0:8000"); err != nil {
		log.Fatalln(err)
	}
}

type HealthzResponse struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
}

// @Summary Health
// @Description Health Check
// @ID healthz
// @Tags Health
// @Produce json
// @Success 200 {object} HealthzResponse "OK"
// @Router /healthz [get]
func getHealthz(c *fiber.Ctx) error {
	return c.Status(http.StatusOK).JSON(HealthzResponse{
		Success: true,
		Message: "OK",
	})
}
