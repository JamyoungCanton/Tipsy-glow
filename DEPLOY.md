# Deploy Maison Mani with Docker

This project is a static Vue 3 + Vite frontend. The Docker image builds the app with Node.js, then serves the production files with Nginx.

## Server Requirements

- Linux server
- Docker installed
- Docker Compose plugin installed

## Build and Run with Docker Compose

From the project root on the server:

```bash
docker compose up -d --build
```

Open the website in a browser:

```text
http://SERVER_IP:8080
```

Replace `SERVER_IP` with your server IP address or domain name.

## Build and Run without Compose

```bash
docker build -t maison-mani:latest .
docker run -d --name maison-mani -p 8080:80 --restart unless-stopped maison-mani:latest
```

Open:

```text
http://SERVER_IP:8080
```

## Update Deployment

After pulling or uploading new code:

```bash
docker compose up -d --build
```

## Useful Commands

View running containers:

```bash
docker ps
```

View logs:

```bash
docker logs maison-mani
```

Stop the site:

```bash
docker compose down
```

## Notes

- The container serves the Vite build from Nginx.
- Vue Router history mode is supported by the Nginx fallback to `index.html`.
- This phase does not include a backend, HTTPS, database, or admin authentication.
