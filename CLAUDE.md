# CLAUDE.md

## Commits e push: direto na `master`

- Faça commit e push **direto na branch `master`**. Não crie branch de feature nem abra pull request, a menos que eu peça.
- Isso vale também para as sessões do Claude Code na nuvem: esta regra substitui a branch de desenvolvimento que a sessão indicar (`claude/...`).
- O push na `master` pode publicar em produção na hora (deploy automático). Antes de enviar, confira que o código funciona: rode os testes ou checagens que o projeto tiver (no mínimo `node --check` nos arquivos JS alterados).
- Se o push for recusado porque a `master` andou, faça `git pull --rebase origin master` e envie de novo. Nunca use `push --force` na `master`.
