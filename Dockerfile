# ---- build stage ----
FROM node:20-bookworm AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --force   # lebih cepat & reproducible
COPY . .
RUN npm run build    # output → /app/dist

# ---- production stage ----
FROM nginx:1.27-alpine

# Vue/Vite build menghasilkan file static saja
COPY --from=builder /app/dist /usr/share/nginx/html

# Hapus default nginx.conf & ganti dengan yang minimal cache‑friendly
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
