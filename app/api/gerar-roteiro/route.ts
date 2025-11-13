import { NextResponse } from 'next/server'

interface RoteiroParte {
  numero: number
  titulo: string
  conteudo: string
  caracterCount: number
}

function gerarRoteiroEstruturado(tema: string): { partes: RoteiroParte[], personagens: string } {
  const estruturaBase = {
    introducao: {
      partes: [1, 2],
      foco: 'apresentação, contexto, personagens principais, situação inicial'
    },
    desenvolvimento: {
      partes: [3, 4, 5, 6, 7, 8],
      foco: 'conflitos, desafios, reviravoltas, clímax'
    },
    encerramento: {
      partes: [9, 10],
      foco: 'resolução, conclusão, mensagem final'
    }
  }

  const partes: RoteiroParte[] = [
    {
      numero: 1,
      titulo: 'Abertura e Contexto',
      conteudo: `🎬 CENA DE ABERTURA

[VISUAL: Panorâmica do cenário principal]

NARRADOR/APRESENTADOR:
"Bem-vindos! Hoje vamos mergulhar em uma jornada extraordinária sobre: ${tema}"

🎯 GANCHO INICIAL:
• Apresente a questão central ou problema que será explorado
• Crie curiosidade sobre o que está por vir
• Estabeleça a importância do tema

📍 CONTEXTO:
Neste primeiro momento, estabelecemos as bases da nossa narrativa. O público precisa entender ONDE estamos, QUANDO a história acontece, e POR QUE isso importa.

💡 ELEMENTOS-CHAVE:
→ Apresentação do mundo/cenário
→ Tom e atmosfera da narrativa
→ Primeiras impressões que definem expectativas

🎭 TRANSIÇÃO PARA PRÓXIMA CENA:
"Mas antes de prosseguirmos, você precisa conhecer quem torna essa história possível..."

📊 INDICADORES TÉCNICOS:
• Ritmo: Moderado a Envolvente
• Emoção: Curiosidade e Antecipação
• Objetivo: Capturar atenção e estabelecer premissa`,
      caracterCount: 0
    },
    {
      numero: 2,
      titulo: 'Personagens e Situação Inicial',
      conteudo: `👥 APRESENTAÇÃO DOS PERSONAGENS

[VISUAL: Close-ups e momentos característicos de cada personagem]

NARRADOR:
"Conheça os protagonistas desta jornada..."

🎭 PERSONAGEM PRINCIPAL:
• Nome e características marcantes
• Motivação central
• O que está em jogo para ele/ela
• Momento que define sua personalidade

👫 PERSONAGENS SECUNDÁRIOS:
• Aliados, mentores ou antagonistas
• Papel de cada um na trama
• Relações e dinâmicas interpessoais

📍 SITUAÇÃO INICIAL:
Aqui estabelecemos o "status quo" - como as coisas são ANTES do conflito principal surgir. Este é o mundo normal dos personagens.

⚡ INCIDENTE INCITANTE:
[O evento que muda tudo]
"Mas tudo isso está prestes a mudar quando..."

💭 MOMENTO DE REFLEXÃO:
Deixe o público processar as implicações deste momento disruptivo.

🎬 TRANSIÇÃO:
"E é exatamente neste momento que nossa verdadeira jornada começa..."

📊 INDICADORES:
• Ritmo: Crescente
• Emoção: Empatia e Conexão
• Objetivo: Criar investimento emocional nos personagens`,
      caracterCount: 0
    },
    {
      numero: 3,
      titulo: 'Primeiro Desafio',
      conteudo: `⚔️ O CHAMADO À AVENTURA

[VISUAL: Tensão crescente, música dramática]

NARRADOR:
"Com a situação estabelecida, nossos personagens enfrentam sua primeira provação..."

🎯 APRESENTAÇÃO DO DESAFIO:
• Qual é o primeiro obstáculo real?
• Por que ele é significativo?
• O que acontece se falharem?

💪 RESPOSTA DOS PERSONAGENS:
→ Reação inicial (medo, hesitação, empolgação?)
→ Debate interno ou externo sobre como proceder
→ Decisão de aceitar ou recusar o desafio

📈 ESCALADA DA TENSÃO:
Introduza complicações que tornam o desafio mais difícil do que parecia inicialmente.

🔥 MOMENTO DE AÇÃO:
[Descreva a tentativa de superar este primeiro obstáculo]
• Estratégias utilizadas
• Obstáculos inesperados
• Pequenas vitórias e derrotas

💡 APRENDIZADO:
O que os personagens descobrem sobre si mesmos ou sobre o desafio maior?

🎭 GANCHO NARRATIVO:
"Mas enquanto celebram esta pequena vitória, eles não imaginam o que está por vir..."

🎬 TRANSIÇÃO:
"Porque o verdadeiro teste ainda está apenas começando..."

📊 INDICADORES:
• Ritmo: Acelerado
• Emoção: Tensão e Excitação
• Objetivo: Demonstrar capacidades e limitações dos personagens`,
      caracterCount: 0
    },
    {
      numero: 4,
      titulo: 'Complicações e Revelações',
      conteudo: `🌀 COMPLEXIDADE CRESCENTE

[VISUAL: Múltiplas camadas de conflito]

NARRADOR:
"Nada é tão simples quanto parece..."

🎭 NOVAS INFORMAÇÕES:
• Revelação que muda a perspectiva da situação
• Segredos descobertos
• Aliados se revelam mais complexos
• Possível traição ou mal-entendido

⚡ COMPLICAÇÕES MÚLTIPLAS:
→ O problema original se desdobra em várias frentes
→ Pressão de tempo aumenta
→ Recursos se tornam escassos
→ Consequências ficam mais graves

💔 MOMENTO DE CRISE PESSOAL:
Os personagens enfrentam dilemas morais ou emocionais:
• Escolha entre dois caminhos difíceis
• Confronto com fraquezas pessoais
• Teste de lealdades e valores

🎯 SUBPLOT DESENVOLVIMENTO:
Desenvolva uma história paralela que enriquece a narrativa principal e oferece contraste ou espelhamento.

📚 LIÇÕES E CRESCIMENTO:
Mostre como os personagens estão começando a mudar ou evoluir com os desafios.

🔮 PRENÚNCIO:
Plante sementes para desenvolvimentos futuros com pistas sutis.

🎬 TRANSIÇÃO:
"Com tantas peças em movimento, uma decisão crucial precisa ser tomada..."

📊 INDICADORES:
• Ritmo: Variado (momentos intensos e reflexivos)
• Emoção: Complexidade, Dúvida, Determinação
• Objetivo: Aprofundar investimento e aumentar stakes`,
      caracterCount: 0
    },
    {
      numero: 5,
      titulo: 'Ponto Médio - Virada Crucial',
      conteudo: `🎯 O PONTO SEM RETORNO

[VISUAL: Momento iconico, iluminação dramática]

NARRADOR:
"Este é o momento que define tudo..."

⚡ A GRANDE DECISÃO:
Apresente o momento de escolha irreversível:
• O que está em jogo agora é maior que nunca
• Não há como voltar atrás depois desta ação
• As consequências serão permanentes

💥 EVENTO TRANSFORMADOR:
[Descreva o momento que muda o curso da narrativa]
• Uma verdade revelada que muda tudo
• Uma perda significativa
• Uma vitória importante mas custosa
• Uma aliança inesperada

🔄 MUDANÇA DE DINÂMICA:
→ De reativo para proativo
→ De vítima para agente
→ De dividido para unido (ou vice-versa)

🎭 IMPACTO NOS PERSONAGENS:
Mostre como este momento afeta cada personagem:
• Transformação de motivações
• Redefinição de objetivos
• Novo entendimento da situação

🌅 NOVA PERSPECTIVA:
"Agora eles veem com clareza o que precisa ser feito..."

📍 REORIENTAÇÃO:
• Novo plano de ação
• Novas alianças ou rupturas
• Preparação para o confronto final

💪 MOMENTO DE EMPODERAMENTO:
Mostre os personagens assumindo controle de seu destino.

🎬 TRANSIÇÃO:
"Com renovada determinação, eles partem para o que pode ser seu maior desafio..."

📊 INDICADORES:
• Ritmo: Clímax Médio
• Emoção: Empoderamento, Determinação, Clareza
• Objetivo: Transformar a direção narrativa`,
      caracterCount: 0
    },
    {
      numero: 6,
      titulo: 'Escalada Para o Clímax',
      conteudo: `⚡ INTENSIFICAÇÃO MÁXIMA

[VISUAL: Montagem rápida, tensão crescente]

NARRADOR:
"Os eventos agora se aceleram em direção ao inevitável confronto..."

🔥 PREPARAÇÃO:
• Personagens reunem recursos
• Treinamento ou planejamento
• Despedidas ou reconciliações importantes
• Últimos momentos de calma antes da tempestade

⏰ PRESSÃO TEMPORAL:
→ Contagem regressiva estabelecida
→ Janela de oportunidade estreitando
→ Cada segundo conta

💣 OBSTÁCULOS FINAIS:
Introduza os últimos desafios antes do clímax:
• Complicações de última hora
• Traições reveladas
• Planos que precisam ser adaptados
• Sacrifícios necessários

🎭 MOMENTO DE VULNERABILIDADE:
Antes da grande ação, mostre a humanidade dos personagens:
• Medos confessados
• Dúvidas expressas
• Esperanças compartilhadas
• Laços fortalecidos

💡 ÚLTIMA REVELAÇÃO:
Uma informação final que muda a estratégia ou adiciona urgência.

🎯 CONVERGÊNCIA:
Todos os elementos narrativos começam a convergir:
• Subplots se conectam com a trama principal
• Personagens secundários têm seus momentos
• Temas centrais são reforçados

🌪️ INÍCIO DA SEQUÊNCIA FINAL:
"E então, com tudo em posição, o momento chega..."

🎬 TRANSIÇÃO:
"Nada mais pode prepará-los para o que está prestes a acontecer..."

📊 INDICADORES:
• Ritmo: Muito Acelerado
• Emoção: Tensão Máxima, Antecipação
• Objetivo: Preparar para o clímax`,
      caracterCount: 0
    },
    {
      numero: 7,
      titulo: 'Clímax - Confronto Principal',
      conteudo: `🎆 O GRANDE CONFRONTO

[VISUAL: Sequência de ação máxima, música épica]

NARRADOR:
"Este é o momento pelo qual tudo foi construído..."

⚔️ INÍCIO DO CONFRONTO:
• Estabeleça o campo de batalha (literal ou metafórico)
• Mostre as forças em oposição
• Defina claramente o que está em jogo

💥 AÇÃO INTENSA:
[Descreva a sequência principal do clímax]
→ Reviravoltas momento a momento
→ Habilidades e preparação sendo testadas
→ Planos sendo executados e adaptados
→ Momentos de quase-derrota

🎭 MOMENTO DE VERDADE PARA CADA PERSONAGEM:
• Protagonista enfrenta seu maior medo ou fraqueza
• Aliados provam seu valor
• Antagonista revela motivações finais
• Escolhas morais definitivas

⚡ O PONTO MAIS BAIXO:
Justo quando tudo parece perdido:
• Falha aparente
• Sacrifício necessário
• Momento de desespero

💎 A VIRADA:
[O momento que inverte a situação]
• Aplicação de lição aprendida
• Uso criativo de recurso estabelecido
• Força interior descoberta
• Ajuda inesperada mas merecida

🏆 RESOLUÇÃO DO CONFLITO PRINCIPAL:
• Victoria (ou derrota) clara
• Consequências imediatas
• Transformação visível

😮 ÚLTIMA SURPRESA:
Uma reviravolta final ou revelação que adiciona camada de significado.

🎬 TRANSIÇÃO:
"Quando a poeira baixa, eles precisam lidar com o que aconteceu..."

📊 INDICADORES:
• Ritmo: Frenético
• Emoção: Todas as emoções intensificadas
• Objetivo: Entregar catarse emocional`,
      caracterCount: 0
    },
    {
      numero: 8,
      titulo: 'Consequências e Transformação',
      conteudo: `🌅 LIDANDO COM AS CONSEQUÊNCIAS

[VISUAL: Aftermath, tons mais suaves]

NARRADOR:
"Após a tempestade, vem o momento de processar o que aconteceu..."

💭 PROCESSAMENTO EMOCIONAL:
• Personagens lidam com o que viveram
• Perdas são lamentadas
• Vitórias são contextualizadas
• Peso das escolhas é sentido

🔍 AVALIAÇÃO DO CUSTO:
→ O que foi sacrificado?
→ Quem mudou e como?
→ Que cicatrizes (físicas ou emocionais) permaneceram?
→ Foi realmente uma vitória?

🎭 MOMENTOS DE RECONCILIAÇÃO:
• Conversas pendentes finalmente acontecem
• Perdões são dados ou pedidos
• Relacionamentos são redefinidos
• Despedidas são feitas

📊 RESOLUÇÃO DE SUBPLOTS:
Amarre pontas soltas das histórias secundárias:
• Destino de personagens secundários
• Resolução de conflitos menores
• Recompensas ou consequências pendentes

💡 INSIGHT E CRESCIMENTO:
Mostre como os personagens foram transformados:
• O que aprenderam
• Como são diferentes do início
• Novas perspectivas adquiridas
• Sabedoria ganha através da experiência

🌍 IMPACTO NO MUNDO:
Como os eventos mudaram o cenário mais amplo:
• Mudanças sociais ou políticas
• Legado das ações
• Novo status quo emergindo

🌱 SEMENTES DO FUTURO:
Mostre possibilidades futuras sem resolver tudo:
• Novos começos insinuados
• Potenciais desdobramentos
• Vida continuando

🎬 TRANSIÇÃO:
"Mas para realmente entender o significado de tudo isso..."

📊 INDICADORES:
• Ritmo: Desacelerado, Reflexivo
• Emoção: Contemplação, Bittersweetness
• Objetivo: Processar a jornada`,
      caracterCount: 0
    },
    {
      numero: 9,
      titulo: 'Resolução e Nova Realidade',
      conteudo: `🏁 A NOVA NORMALIDADE

[VISUAL: Cenas de vida retomada, porém transformada]

NARRADOR:
"O mundo continua girando, mas nada é como era antes..."

🌟 ESTABELECENDO O NOVO STATUS QUO:
• Como é a vida após os eventos?
• Que rotinas foram retomadas ou criadas?
• Como o mundo reflete as mudanças?
• Quem está onde e fazendo o quê?

👥 VIDAS RECONSTRUÍDAS:
→ Personagens em seus novos papéis
→ Relacionamentos em novo patamar
→ Comunidade ou sociedade se adaptando
→ Cicatrizes que viraram força

🎁 RECOMPENSAS MERECIDAS:
Mostre os personagens colhendo frutos de sua jornada:
• Reconhecimento ou paz interior
• Realizações pessoais
• Conexões fortalecidas
• Objetivos finalmente alcançados

💬 CONVERSAS FINAIS:
Diálogos que encapsulam a jornada:
• Reflexões sobre o que passou
• Agradecimentos importantes
• Promessas para o futuro
• Piadas internas que mostram intimidade

🎓 LIÇÃO PRINCIPAL:
Cristalize o tema central da narrativa:
• Qual foi a mensagem?
• O que aprendemos junto com os personagens?
• Como isso se aplica além da história?
• Por que esta jornada importou?

🔮 OLHANDO PARA FRENTE:
Sem criar novo conflito, mostre que a vida continua:
• Esperança para o futuro
• Preparação para novos desafios
• Crescimento contínuo
• Ciclo da vida

🌈 MOMENTO DE BELEZA:
Uma cena ou imagem que captura a essência da transformação.

🎬 TRANSIÇÃO:
"E assim, chegamos ao final desta jornada, mas talvez ao início de algo novo..."

📊 INDICADORES:
• Ritmo: Calmo, Conclusivo
• Emoção: Satisfação, Nostalgia, Esperança
• Objetivo: Proporcionar fechamento satisfatório`,
      caracterCount: 0
    },
    {
      numero: 10,
      titulo: 'Encerramento e Mensagem Final',
      conteudo: `🎬 O ARCO COMPLETO

[VISUAL: Montagem dos momentos-chave da jornada]

NARRADOR:
"Do início ao fim, testemunhamos uma transformação extraordinária..."

🔄 ESPELHAMENTO:
Retorne a elementos da abertura, mostrando como tudo mudou:
• Compare cena inicial com cena final
• Mostre evolução do personagem principal
• Contraste mundo antes e depois
• Repita frase ou símbolo com novo significado

📜 RECAPITULAÇÃO EMOCIONAL:
Não recontando eventos, mas relembrando o que sentimos:
• "Rimos quando..."
• "Nos preocupamos quando..."
• "Celebramos quando..."
• "Aprendemos que..."

🎯 MENSAGEM CENTRAL:
Articule claramente o significado maior:
• A moral da história
• A verdade universal explorada
• O que levamos conosco
• Como isso muda nossa perspectiva

💝 GRATIDÃO E CONEXÃO:
[Se for vídeo/apresentação]
• Agradeça ao público por acompanhar
• Reconheça a importância da jornada compartilhada
• Convide à reflexão pessoal

🌍 APLICAÇÃO AO MUNDO REAL:
Como esta história se conecta com a vida do público:
• Paralelos com experiências reais
• Inspiração para ação
• Questões para reflexão pessoal

✨ MOMENTO FINAL MEMORÁVEL:
Deixe uma imagem, frase ou ideia final que ficará:
• Uma citação poderosa
• Uma imagem simbólica
• Uma pergunta provocativa
• Um momento de beleza pura

🎭 CHAMADA FINAL:
"E agora, a jornada continua com você..."

💫 FECHAMENTO EMOCIONAL:
Termine em tom elevado:
• Inspiração
• Esperança
• Convite à ação
• Celebração do potencial humano

🙏 AGRADECIMENTOS:
[Se aplicável]
• Equipe, apoiadores, público

🎬 CRÉDITOS EMOCIONAIS:
"Esta foi a história de [tema], mas também é a história de cada um de nós que ousa [ação relacionada ao tema]..."

📊 INDICADORES:
• Ritmo: Elevado mas calmo
• Emoção: Inspiração, Completude, Satisfação
• Objetivo: Deixar impacto duradouro

🎆 FIM

[Última imagem: Algo que simboliza esperança, continuidade ou o tema central]

"Obrigado por acompanhar esta jornada. Que ela inspire a sua própria."`,
      caracterCount: 0
    }
  ]

  // Calcula caracteres para cada parte
  partes.forEach(parte => {
    parte.caracterCount = parte.conteudo.length
  })

  const personagens = `🎭 DETALHAMENTO COMPLETO DOS PERSONAGENS
Para Geração de Imagens e Desenvolvimento Aprofundado

═══════════════════════════════════════════════════════════

👤 PERSONAGEM PRINCIPAL

NOME: [Nome baseado no tema]

APARÊNCIA FÍSICA:
• Idade: [faixa etária apropriada]
• Altura e Compleição: [descrição detalhada]
• Cabelo: [cor, comprimento, estilo, textura]
• Olhos: [cor, formato, expressão típica]
• Rosto: [formato, características marcantes, cicatrizes, marcas]
• Pele: [tom, textura, particularidades]
• Vestimentas: [estilo, cores predominantes, acessórios característicos]
• Porte: [postura, maneira de andar, linguagem corporal]

CARACTERÍSTICAS PSICOLÓGICAS:
• Personalidade Core: [traços fundamentais]
• Motivações Profundas: [o que realmente o move]
• Medos Secretos: [vulnerabilidades ocultas]
• Desejos Não Expressos: [anseios internos]
• Conflitos Internos: [contradições na personalidade]

BACKGROUND:
• Origem: [de onde vem, contexto familiar]
• Evento Formativo: [momento que o definiu]
• Habilidades Especiais: [o que sabe fazer melhor]
• Fraquezas: [limitações físicas ou emocionais]
• Relacionamentos Chave: [conexões importantes]

ARCO DE TRANSFORMAÇÃO:
• Estado Inicial: [quem é no começo]
• Catalisador: [o que provoca mudança]
• Estado Final: [quem se torna ao final]

PARA GERAÇÃO DE IMAGEM:
Descrição Consolidada: [Um parágrafo denso com todos os detalhes visuais para usar em prompts de IA]

═══════════════════════════════════════════════════════════

👥 PERSONAGENS SECUNDÁRIOS

ALIADO/AMIGO:
• Nome: [nome]
• Aparência: [descrição física completa]
• Papel na História: [função narrativa]
• Relação com Protagonista: [dinâmica]
• Característica Marcante: [o que o torna memorável]
• Visual Key: [elemento visual distintivo]

MENTOR/GUIA:
• Nome: [nome]
• Aparência: [descrição física completa - geralmente mais velho ou experiente]
• Sabedoria que Oferece: [tipo de orientação]
• Mistério Pessoal: [segredo ou complexidade]
• Visual Key: [símbolos de sabedoria ou experiência]

ANTAGONISTA/DESAFIO:
• Nome ou Natureza: [identificação]
• Aparência: [descrição física completa - pode ser intimidante ou inesperadamente comum]
• Motivação: [por que se opõe ao protagonista]
• Complexidade: [o que o torna mais que um vilão simples]
• Visual Key: [elementos que comunicam oposição]

PERSONAGEM CÔMICO/ALÍVIO:
• Nome: [nome]
• Aparência: [descrição física completa - pode ter elementos exagerados]
• Função: [como alivia tensão]
• Profundidade Escondida: [camada séria sob o humor]
• Visual Key: [elementos visuais que sugerem personalidade leve]

═══════════════════════════════════════════════════════════

🎨 PALETA VISUAL DA NARRATIVA

CORES TEMÁTICAS:
• Cor Principal: [cor que representa o tema central]
• Cor Secundária: [cor que complementa ou contrasta]
• Cor de Acento: [para momentos especiais]

ESTILO VISUAL GERAL:
• Período/Era: [quando se passa]
• Influências Estéticas: [referencias visuais]
• Tom Visual: [realista, estilizado, fantástico, etc]
• Atmosfera: [como deve "sentir" visualmente]

LOCAÇÕES CHAVE:
Para cada local importante, descreva:
• Ambiente Principal: [descrição detalhada]
• Iluminação Característica: [como é a luz]
• Elementos Distintivos: [o que o torna único]
• Mood: [sensação que evoca]

═══════════════════════════════════════════════════════════

🖼️ PROMPTS SUGERIDOS PARA GERAÇÃO DE IMAGENS

1. Personagem Principal - Retrato:
"[Descrição física completa], [expressão], [vestimenta], [estilo artístico], iluminação [tipo], fundo [descrição], [mood/atmosfera], high quality, detailed"

2. Cena Icônica:
"[Personagens envolvidos] em [local], [ação acontecendo], [elementos visuais chave], [clima emocional], [estilo], cinematic composition"

3. Momento de Transformação:
"[Personagem] [durante momento de mudança], [elementos visuais de antes e depois], [simbolismo], [luz dramática], [composição que enfatiza mudança]"

4. Grupo/Ensemble:
"[Lista todos os personagens], [posicionamento que mostra dinâmica], [ambiente], [cada um com característica visual marcante], [unidade visual através de elemento comum]"

═══════════════════════════════════════════════════════════

💡 NOTAS PARA CONSISTÊNCIA VISUAL

Ao gerar múltiplas imagens, mantenha:
• Mesmas características físicas dos personagens
• Paleta de cores consistente
• Estilo artístico uniforme
• Proporções e escala coerentes
• Elementos de figurino reconhecíveis

Use sempre os mesmos descritores-chave para cada personagem em diferentes prompts para manter consistência visual.

═══════════════════════════════════════════════════════════

Esta estrutura de personagens foi criada para funcionar com ${tema}
Adapte os detalhes específicos mantendo a profundidade e riqueza descritiva.`

  return { partes, personagens }
}

export async function POST(request: Request) {
  try {
    const { tema } = await request.json()

    if (!tema || tema.trim().length === 0) {
      return NextResponse.json(
        { error: 'Tema é obrigatório' },
        { status: 400 }
      )
    }

    const roteiro = gerarRoteiroEstruturado(tema)

    return NextResponse.json(roteiro)
  } catch (error) {
    console.error('Erro ao gerar roteiro:', error)
    return NextResponse.json(
      { error: 'Erro ao gerar roteiro' },
      { status: 500 }
    )
  }
}
