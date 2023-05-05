# Documentação de boas práticas

## Nomeclatura de arquivos
Padrão kebab case. Ex: `nome-do-arquivo.ts`.

Os seguintes tipos de arquivos devem possuir o padrão citado abaixo:

Tipo de arquivo | Nomeclatura
--- | ---
Interface, types | .struct
Repositórios | .repository
Use Case | .usecase
Controller | .controller

## Nomeclatura de classes
Padrão pascal case. Ex: `SignInSocial.ts`.

Ao final de cada classe deve conter sua responsabilidade. Ex: `SignInSocialUseCase`.

## Nomeclatura de pastas
Padrão camel case. Ex: `userAccess`.

## Nomeclatura de variáveis
...

## Tipagem
Por padrão as funções devem tipar todos os parâmetros de entrada e saída. Fazer menos uso de retornos como "any".

## Funções
Funções devem ser escritas com a "function" keyword.

Se a função possuir 4 parâmetros ou mais, recomendável utilizar formato de objeto + destructuring.
Ex:
```typescript
// Errado
function test(p1: string, p2: string, p3: string, p4: string) {
  console.log(p1, p2, p3, p4);
}

// Correto
interface ITest {
    p1: string;
    p2: string;
    p3: string;
    p4: string;
}

function test({ p1, p2, p3, p4}: ITest) {
  console.log(p1, p2, p3, p4);
}
```

## Testes
Os testes unitários devem ser nomeados com `.spec.ts`.
Os testes de integração devem ser nomeados com `.test.ts`.

Para cada método testado é necessário o mínimo de 2 testes, sendo eles preferencialmente, exceção (caso de erro) e sucesso. Com ressalva para caso que a própria linguagem ou método já force o uso correto e não faça sentido criar dois testes.

Em testes, use preferencialmente o "it" ao invés do "test", sendo assim ficando `it("should...")`.

## Lidando com arquivos.
Arquivos com múltiplas funções devem conter a mesma responsabilidade e estarem correlacionadas.

Os arquivos devem conter preferencialmente uma função e o máximo de 80 linhas, com ressalva em casos muito específicos.

## Exceções
Não deve ser utilizado `throw new Error()` explicitamente.

Para todas as exceções deve ser criado um método para lidar com a mesma. Ex: `UserAlreadyExistsException`. Com ressalva para retornos de API que devem retornar erros genéricos ou erros mais específicos em casos de validações de formulários.
