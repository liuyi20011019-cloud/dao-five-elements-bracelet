# GitHub Pages 共享部署说明

这个项目已经配置好 GitHub Pages 自动部署：

- Vite 使用相对资源路径，适配 `https://用户名.github.io/仓库名/`
- GitHub Actions 会在推送到 `main` 分支后自动构建并发布 `dist`

## 首次发布步骤

1. 在 GitHub 新建一个公开仓库，例如：

   `dao-five-elements-bracelet`

2. 在当前项目目录初始化 Git 并提交：

   ```bash
   git init
   git add .
   git commit -m "Initial dao five elements website"
   git branch -M main
   ```

3. 绑定你的 GitHub 仓库并推送：

   ```bash
   git remote add origin https://github.com/你的用户名/dao-five-elements-bracelet.git
   git push -u origin main
   ```

4. 打开 GitHub 仓库：

   `Settings` -> `Pages` -> `Build and deployment`

5. Source 选择：

   `GitHub Actions`

6. 等待 `Actions` 里的 `Deploy to GitHub Pages` 运行完成。

7. 发布完成后访问：

   `https://你的用户名.github.io/dao-five-elements-bracelet/`

## 后续更新

修改代码后执行：

```bash
git add .
git commit -m "Update website"
git push
```

GitHub 会自动重新部署。
