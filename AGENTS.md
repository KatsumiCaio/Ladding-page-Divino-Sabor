# Diretrizes de Desenvolvimento e Governança do Projeto (AGENTS.md)

Este documento define o padrão obrigatório para gestão de tarefas, controle de código, validação e governança de Pull Requests para o projeto **Divino Sabor**. Qualquer agente de IA ou desenvolvedor deve consultar e aplicar estas regras antes de implementar ou submeter alterações no repositório.

---

## 1. Gestão de Tarefas e Categorização de Issues (GitHub Issues)

Antes de iniciar qualquer implementação, deve existir uma **Issue** no GitHub que descreva a demanda. Cada tarefa deve ser obrigatoriamente categorizada em uma das seguintes três classificações:

* 🐛 **Correção** (`bug` / `fix`): Resolução de falhas, erros, comportamentos inesperados ou quebras na interface/lógica.
* ⚡ **Melhoria** (`enhancement` / `improvement`): Otimização de código existente, melhorias visuais/UX, acessibilidade, performance ou refatoração.
* ✨ **Nova função** (`feature` / `new-function`): Criação de novas funcionalidades, novas páginas, componentes inéditos ou integrações.

---

## 2. Fluxo de Trabalho com Pull Requests (PRs)

Todas as entregas, alterações e atualizações no código devem ser gerenciadas via **Pull Requests**. Nenhuma alteração deve ser mesclada sem seguir o modelo padronizado de PR.

### Estrutura Obrigatória da Descrição de todo Pull Request:

```markdown
## 📌 Issue Relacionada
- Relacionado à Issue: #[NÚMERO_DA_ISSUE] (ex: Closes #12 ou Ref #12)

## 📝 O que mudou
- Detalhamento claro das alterações efetuadas.
- Lista de arquivos modificados e objetivo técnico de cada mudança.

## ✅ Como foi validado
- Procedimentos de teste executados (ex: `compile_applet`, `lint_applet`, checagens de layout responsivo).
- Resultados dos testes de compilação, validação de sintaxe e comportamento em tela.

## ⚠️ Riscos, Limitações e Próximos Passos
- **Riscos e Impactos**: Potenciais efeitos colaterais em outros componentes.
- **Limitações**: Restrições conhecidas ou casos de borda não contemplados.
- **Próximos Passos**: Recomendações de evolução ou tarefas subsequentes.
```

---

## 3. Padrão de Execução para Agentes de IA

1. **Leitura Prévia**: Verificar a Issue atribuída e identificar o tipo (Correção, Melhoria ou Nova função).
2. **Implementação**: Manter o código limpo, modular, fortemente tipado com TypeScript e estritamente alinhado à identidade visual (Paleta Natural Tones / Creme `#FAF7F2`, Terracota `#8C5E44`, Café `#4A3728`).
3. **Validação Rigorosa**: Executar obrigatoriamente `lint_applet` e `compile_applet` para garantir zero erros de build ou sintaxe.
4. **Registro Completo**: Formatar o resumo final/relatório de entrega do PR contendo todos os 4 tópicos obrigatórios (Issue Relacionada, O que mudou, Como foi validado, Riscos/Limitações/Próximos Passos).
