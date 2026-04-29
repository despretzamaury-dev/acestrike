"use client";

import { useEffect, useState } from "react";
import Head from "next/head";

type ArticleData = {
  tag: string;
  emoji: string;
  readTime: string;
  title: string;
  intro: string;
  toc: [string, string][];
  content: string;
};

const ARTICLES: Record<string, ArticleData> = {
  'gestion-club': {
    tag:'Guide complet 2025', emoji:'🎾', readTime:'9 min',
    title:'La <em>gestion d\'un club de tennis</em> moderne : tout ce qu\'il faut savoir',
    intro:'Licences, réservations, inscriptions aux stages, communication, sponsors… La gestion d\'un club de tennis en 2025 est un métier à part entière. Ce guide vous donne les clés pour l\'aborder sereinement.',
    toc:[['enjeux','Les enjeux en 2025'],['taches','Les tâches les plus chronophages'],['outils','Les outils indispensables'],['digitaliser','Digitaliser en 4 étapes'],['erreurs','Les 5 erreurs à éviter'],['faq','Questions fréquentes']],
    content:`
    <h2 id="enjeux">1. Les enjeux de la gestion d'un club de tennis en 2025</h2>
    <p>Le contexte a profondément changé depuis le Covid. Les adhérents s'attendent désormais à pouvoir s'inscrire, réserver et payer en ligne, exactement comme ils le font pour n'importe quel autre service. Un club qui impose encore des formulaires papier ou des chèques au secrétariat perd des adhérents potentiels avant même qu'ils aient mis un pied sur le court.</p>
    <div class="stat-strip"><div class="stat-strip-item"><span class="stat-strip-num">68%</span><span class="stat-strip-lbl">des familles cherchent un club de tennis sur Google avant de contacter</span></div><div class="stat-strip-item"><span class="stat-strip-num">15h</span><span class="stat-strip-lbl">par semaine consacrées à l'administration dans un club de 500 adhérents</span></div><div class="stat-strip-item"><span class="stat-strip-num">−30%</span><span class="stat-strip-lbl">d'impayés après passage au paiement en ligne</span></div></div>
    <h2 id="taches">2. Les tâches administratives les plus chronophages</h2>
    <h3>Les inscriptions aux stages vacances</h3>
    <p>C'est le pic administratif par excellence. Chaque période de vacances génère des dizaines de demandes. Sans système en ligne, chaque inscription implique un échange email, une saisie manuelle, l'attente d'un chèque et la vérification du certificat médical. Multiplié par 80 inscrits, c'est facilement 20 à 30 heures de travail sur deux semaines.</p>
    <h3>Les réservations de courts</h3>
    <p>Les appels pour réserver un court restent courants dans les clubs qui n'ont pas de système en ligne performant. TenUp résout en partie ce problème pour les membres existants, mais pas pour les non-membres souhaitant réserver à la séance.</p>
    <h3>La relance des renouvellements</h3>
    <p>Identifier qui n'a pas renouvelé sa licence, les relancer, gérer les retardataires… sans outil dédié, c'est une tâche répétitive et frustrante qui représente plusieurs heures par semaine en fin de saison.</p>
    <h2 id="outils">3. Les outils indispensables</h2>
    <ul>
      <li><strong>TenUp (FFT)</strong> — Gestion des licences, réservations membres, classements. Incontournable pour tout club affilié FFT.</li>
      <li><strong>AceStrike</strong> — Vitrine moderne, inscriptions en ligne, paiement sécurisé, espace partenaires. Complément direct de TenUp.</li>
      <li><strong>Brevo ou Mailchimp</strong> — Newsletters et rappels automatiques de renouvellement.</li>
      <li><strong>Google Business Profile</strong> — Gratuit et essentiel pour le référencement local. À mettre à jour régulièrement.</li>
    </ul>
    <h2 id="digitaliser">4. Digitaliser votre gestion en 4 étapes</h2>
    <p><strong>Étape 1 : Auditer l'existant.</strong> Listez toutes les tâches administratives récurrentes et estimez le temps hebdomadaire passé sur chacune.</p>
    <p><strong>Étape 2 : Prioriser les quick wins.</strong> Commencez par ce qui génère le plus d'appels et d'emails : les inscriptions aux stages et les questions sur les tarifs.</p>
    <p><strong>Étape 3 : Mettre en place le paiement en ligne.</strong> C'est le changement le plus rapide en termes de ROI : moins d'impayés, moins de relances, moins de manipulation de chèques.</p>
    <p><strong>Étape 4 : Créer une vitrine qui recrute.</strong> Un site web optimisé SEO fait venir les futurs adhérents à vous, sans effort commercial supplémentaire.</p>
    <blockquote>« On pensait que c'était compliqué. En réalité, en six semaines, on avait un portail d'inscription opérationnel pour les stages de Toussaint. Le secrétaire a récupéré facilement 5 heures par semaine. »<cite>— Directrice administrative, club de 620 adhérents, Hauts-de-France</cite></blockquote>
    <h2 id="erreurs">5. Les 5 erreurs à éviter</h2>
    <ol>
      <li><strong>Gérer les inscriptions par email.</strong> L'email est un outil de communication, pas un formulaire. Chaque inscription manuelle est une source d'erreur et de perte de temps.</li>
      <li><strong>Négliger le site web.</strong> Un site non mis à jour depuis 3 ans renvoie une image négative du club.</li>
      <li><strong>Accepter uniquement les chèques.</strong> En 2025, refuser le paiement en ligne, c'est perdre des inscriptions.</li>
      <li><strong>Ne pas utiliser les données disponibles.</strong> TenUp et un bon site web génèrent des données précieuses. Les ignorer, c'est naviguer à l'aveugle.</li>
      <li><strong>Tout faire reposer sur une seule personne.</strong> La digitalisation permet de répartir les tâches et de documenter les processus.</li>
    </ol>
    <h2 id="faq">Questions fréquentes</h2>
    <div class="faq-list">
      <div class="faq-item"><button class="faq-q" onclick="window.toggleFaq(this)">Quel logiciel pour gérer un club de tennis ?<span class="faq-chevron">▾</span></button><div class="faq-a">TenUp (FFT) est la référence pour les licences et réservations. Pour la vitrine, inscriptions aux stages et sponsors, AceStrike complète TenUp avec un site sur-mesure et des formulaires automatisés.</div></div>
      <div class="faq-item"><button class="faq-q" onclick="window.toggleFaq(this)">Comment moderniser la gestion d'un club de tennis ?<span class="faq-chevron">▾</span></button><div class="faq-a">Les trois priorités : automatiser les inscriptions et paiements, centraliser les informations sur un site moderne, et mettre en place un suivi des données (remplissage, impayés, renouvellements).</div></div>
      <div class="faq-item"><button class="faq-q" onclick="window.toggleFaq(this)">Combien coûte la gestion administrative d'un club ?<span class="faq-chevron">▾</span></button><div class="faq-a">Un club de taille moyenne consacre en moyenne 15 à 20 heures par semaine à l'administration. La digitalisation permet de réduire ce temps de 30 à 50%.</div></div>
    </div>`
  },
  'alternative-tenup': {
    tag:'Comparatif 2025', emoji:'⚡', readTime:'7 min',
    title:'Quelle <em>alternative à TenUp</em> pour votre club de tennis ?',
    intro:'TenUp gère vos licences. Mais qui gère votre image, vos inscriptions aux stages et vos sponsors ? Le comparatif complet pour choisir la bonne solution en 2025.',
    toc:[['tenup-limites','Ce que TenUp fait (et ne fait pas)'],['alternatives','Les alternatives en 2025'],['comparatif','Tableau comparatif'],['acestrike','AceStrike : ce que ça change'],['faq','Questions fréquentes']],
    content:`
    <h2 id="tenup-limites">1. Ce que TenUp fait bien — et ses limites réelles</h2>
    <p>TenUp est la plateforme officielle de la FFT. Elle est conçue pour la gestion interne des clubs affiliés : licences, réservations de courts, classements, communications aux membres déjà inscrits. Sur ces points, c'est un outil robuste et bien intégré à l'écosystème FFT.</p>
    <p><strong>Forces de TenUp :</strong> gestion des licences FFT, réservation de courts pour les membres, gestion des plannings, classements et tournois.</p>
    <p><strong>Limites :</strong> aucune page vitrine moderne, pas d'inscription en ligne aux stages, pas de paiement sécurisé intégré, image numérique peu valorisante, pas d'espace partenaires, SEO local inexistant.</p>
    <div class="highlight-box"><p>🎯 <strong>En résumé :</strong> TenUp est un outil de gestion <em>interne</em>. Il ne vous aide pas à recruter de nouveaux adhérents, à remplir vos stages vacances, ou à convaincre un sponsor. C'est là qu'une solution complémentaire entre en jeu.</p></div>
    <h2 id="alternatives">2. Les alternatives et compléments à TenUp en 2025</h2>
    <h3>ADOC / MyFFA</h3>
    <p>Autre outil de la FFT, en partie remplacé par TenUp. Mêmes limites sur la partie vitrine et recrutement.</p>
    <h3>WordPress DIY</h3>
    <p>Solution flexible mais chronophage à maintenir. Souvent abandonnée faute de temps. La sécurité et les mises à jour deviennent vite une charge.</p>
    <h3>AceStrike — la solution sur-mesure</h3>
    <p>AceStrike n'est pas un remplaçant de TenUp — c'est son complément naturel. Conçu pour les clubs de tennis affiliés FFT, il prend en charge tout ce que TenUp ne fait pas.</p>
    <h2 id="comparatif">3. Tableau comparatif</h2>
    <div class="compare-wrap"><table class="compare-table"><thead><tr><th>Fonctionnalité</th><th>TenUp seul</th><th>WordPress DIY</th><th class="col-as">TenUp + AceStrike</th></tr></thead><tbody><tr><td>Gestion licences FFT</td><td><span class="ck">✓</span></td><td><span class="cx">✗</span></td><td><span class="ck">✓</span></td></tr><tr><td>Site vitrine moderne</td><td><span class="cx">✗</span></td><td>⚡ Variable</td><td><span class="ck">✓</span></td></tr><tr><td>Inscriptions stages</td><td><span class="cx">✗</span></td><td><span class="cx">✗</span></td><td><span class="ck">✓</span></td></tr><tr><td>Paiement sécurisé</td><td><span class="cx">✗</span></td><td><span class="cx">✗</span></td><td><span class="ck">✓</span></td></tr><tr><td>Espace sponsors</td><td><span class="cx">✗</span></td><td><span class="cx">✗</span></td><td><span class="ck">✓</span></td></tr><tr><td>SEO local</td><td><span class="cx">✗</span></td><td>⚡ Si expertise</td><td><span class="ck">✓</span></td></tr></tbody></table></div>
    <h2 id="acestrike">4. AceStrike : ce que ça change concrètement</h2>
    <div class="stat-strip"><div class="stat-strip-item"><span class="stat-strip-num">−40%</span><span class="stat-strip-lbl">d'appels et emails entrants grâce à la centralisation</span></div><div class="stat-strip-item"><span class="stat-strip-num">2 min</span><span class="stat-strip-lbl">pour s'inscrire à un stage depuis n'importe quel appareil</span></div><div class="stat-strip-item"><span class="stat-strip-num">2×</span><span class="stat-strip-lbl">encarts sponsors suffisent à rentabiliser la solution</span></div></div>
    <blockquote>« J'avais l'habitude de passer mes dimanches à gérer les inscriptions par email. Depuis qu'on a basculé sur le portail en ligne, je récupère ce temps pour être sur le court. »<cite>— Président d'un club de 450 membres, Île-de-France</cite></blockquote>
    <h2 id="faq">Questions fréquentes</h2>
    <div class="faq-list">
      <div class="faq-item"><button class="faq-q" onclick="window.toggleFaq(this)">TenUp est-il gratuit pour les clubs de tennis ?<span class="faq-chevron">▾</span></button><div class="faq-a">TenUp propose une offre de base gratuite pour les clubs affiliés FFT, mais les fonctionnalités avancées nécessitent des abonnements payants. De plus, TenUp ne couvre pas les besoins en vitrine, inscriptions aux stages ou SEO local.</div></div>
      <div class="faq-item"><button class="faq-q" onclick="window.toggleFaq(this)">Peut-on garder TenUp tout en ayant un site AceStrike ?<span class="faq-chevron">▾</span></button><div class="faq-a">Oui, c'est même la configuration recommandée. TenUp gère l'administration interne. AceStrike s'occupe de tout ce qui est public : vitrine, recrutement, inscriptions aux stages et sponsoring.</div></div>
      <div class="faq-item"><button class="faq-q" onclick="window.toggleFaq(this)">Combien de temps pour mettre en place AceStrike ?<span class="faq-chevron">▾</span></button><div class="faq-a">Le déploiement complet prend 3 à 6 semaines selon la taille du club. Le portail d'inscription peut être opérationnel en moins de deux semaines.</div></div>
    </div>`
  },
  'site-web':{tag:'Création & Refonte',emoji:'💻',readTime:'8 min',title:'Créer un <em>site web pour votre club de tennis</em> : le guide 2025',intro:'Un site web n\'est plus un luxe pour un club de tennis — c\'est votre meilleur commercial. Il recrute des adhérents 24h/24, remplit vos stages et convainc vos sponsors.',toc:[['pourquoi','Pourquoi votre club a besoin d\'un site web'],['pages','Les pages indispensables'],['fonctionnalites','Les fonctionnalités clés'],['seo','Optimiser le SEO local'],['budget','Budget et options'],['faq','Questions fréquentes']],content:`<h2 id="pourquoi">1. Pourquoi votre club de tennis a besoin d'un site web moderne</h2><p>En France, 78% des recherches de clubs de sport commencent sur Google. Pourtant, plus de 60% des clubs affiliés FFT ont un site datant de plus de 5 ans, non mobile-friendly et sans fonctionnalité de réservation ou d'inscription en ligne.</p><div class="stat-strip"><div class="stat-strip-item"><span class="stat-strip-num">70%</span><span class="stat-strip-lbl">des futurs adhérents jugent un club sur ses photos en ligne avant de contacter</span></div><div class="stat-strip-item"><span class="stat-strip-num">3 sec</span><span class="stat-strip-lbl">avant qu'un visiteur quitte un site trop lent</span></div><div class="stat-strip-item"><span class="stat-strip-num">×2,4</span><span class="stat-strip-lbl">plus de demandes d'inscription pour les clubs avec un site moderne</span></div></div><h2 id="pages">2. Les pages indispensables</h2><ul><li><strong>Accueil</strong> — Accroche, ambiance, call-to-action vers l'inscription</li><li><strong>Le club</strong> — Histoire, équipe encadrante, photos des courts</li><li><strong>Cours et stages</strong> — École de tennis, adultes, stages vacances avec tarifs</li><li><strong>Inscription en ligne</strong> — Formulaire avec paiement, téléversement certificat</li><li><strong>Réservation courts</strong> — Intégration TenUp ou système dédié</li><li><strong>Partenaires</strong> — Espace sponsors avec logos et liens</li></ul><h2 id="fonctionnalites">3. Les fonctionnalités qui font la différence</h2><p>Inscription automatisée, paiement sécurisé Stripe, design mobile-first, SEO local intégré, espace partenaires avec statistiques, intégration TenUp native.</p><h2 id="seo">4. Optimiser le SEO local</h2><p><strong>Google Business Profile :</strong> fiche complète avec photos récentes, horaires, numéro de téléphone. Apparaissez dans le "pack local" (les 3 premiers résultats avec carte).</p><p><strong>Schema.org SportsClub :</strong> balisage technique indiquant à Google que votre site est celui d'un club sportif. AceStrike intègre ce balisage automatiquement.</p><p><strong>Contenu local régulier :</strong> articles mentionnant votre ville, vos tournois, vos résultats — signal local fort pour Google.</p><h2 id="budget">5. Budget</h2><p>Un site web professionnel pour club de tennis coûte entre 1 500€ et 5 000€ selon les fonctionnalités. AceStrike propose une solution clé en main incluant vitrine, inscriptions et paiement.</p><div class="highlight-box"><p>💡 Si votre solution libère 10h/semaine de secrétariat, évite 15 impayés et génère 5 inscriptions supplémentaires aux stages — la question n'est plus combien ça coûte, mais combien ça rapporte.</p></div><h2 id="faq">Questions fréquentes</h2><div class="faq-list"><div class="faq-item"><button class="faq-q" onclick="window.toggleFaq(this)">Combien coûte un site web pour un club de tennis ?<span class="faq-chevron">▾</span></button><div class="faq-a">Entre 1 500€ et 5 000€ selon les fonctionnalités. AceStrike propose une solution clé en main incluant vitrine, inscriptions et paiement sécurisé.</div></div><div class="faq-item"><button class="faq-q" onclick="window.toggleFaq(this)">Comment bien référencer mon site club de tennis ?<span class="faq-chevron">▾</span></button><div class="faq-a">Trois leviers : un site techniquement optimisé (vitesse, mobile-first, Schema.org), un contenu ciblant les mots-clés locaux, et une fiche Google Business à jour avec des avis.</div></div></div>`},
  'reservation':{tag:'Gestion & Numérique',emoji:'📅',readTime:'7 min',title:'<em>Réservation de courts de tennis</em> en ligne : le guide pour votre club',intro:'Finies les réservations par téléphone et le carnet papier. En 2025, vos adhérents s\'attendent à réserver en deux clics depuis leur smartphone.',toc:[['enjeux','Pourquoi digitaliser'],['tenup','TenUp et la réservation'],['scenarios','Scénarios selon votre club'],['mettre','Mise en place'],['faq','Questions fréquentes']],content:`<h2 id="enjeux">1. Pourquoi digitaliser les réservations de courts</h2><div class="stat-strip"><div class="stat-strip-item"><span class="stat-strip-num">3h</span><span class="stat-strip-lbl">par jour gérées par téléphone dans un club de 6 courts</span></div><div class="stat-strip-item"><span class="stat-strip-num">87%</span><span class="stat-strip-lbl">des joueurs préfèrent réserver en ligne plutôt que par téléphone</span></div><div class="stat-strip-item"><span class="stat-strip-num">−60%</span><span class="stat-strip-lbl">d'appels reçus après mise en place d'un système en ligne</span></div></div><h2 id="tenup">2. TenUp et la réservation : ce que ça couvre</h2><p>TenUp intègre un module de réservation pour les membres licenciés FFT. Mais il ne couvre pas les non-membres, ne propose pas de paiement à la séance et l'interface est peu intuitive pour les joueurs occasionnels.</p><h2 id="scenarios">3. Scénarios selon votre club</h2><p><strong>Petit club (&lt; 300 membres) :</strong> TenUp seul suffit si vos membres sont habitués et que vous ne proposez pas de réservation aux non-membres.</p><p><strong>Club moyen (300–1000 membres) :</strong> TenUp + site vitrine avec page "Réservation" et bouton renvoyant vers TenUp.</p><p><strong>Grand club + location à la séance :</strong> système de réservation payant pour les non-membres, intégré au site.</p><h2 id="mettre">4. Mise en place</h2><ol><li>Activer et configurer le module de réservation TenUp</li><li>Créer une page "Réservation" sur votre site avec photos des courts et tarifs</li><li>Intégrer le paiement à la séance si votre club le propose</li><li>Communiquer le changement à vos membres</li></ol><blockquote>« On recevait entre 15 et 20 appels par jour pluvieux pour savoir si les courts étaient jouables. Depuis qu'on a mis une page d'état sur le site, c'est tombé à presque zéro. »<cite>— Secrétaire général, club de 780 membres, Bretagne</cite></blockquote><h2 id="faq">Questions fréquentes</h2><div class="faq-list"><div class="faq-item"><button class="faq-q" onclick="window.toggleFaq(this)">Comment proposer la réservation en ligne dans mon club ?<span class="faq-chevron">▾</span></button><div class="faq-a">TenUp inclut un module de réservation pour les membres. Pour les non-membres ou la réservation à la séance, il faut compléter avec un système intégré à votre site web.</div></div><div class="faq-item"><button class="faq-q" onclick="window.toggleFaq(this)">Peut-on réserver un court sans être membre ?<span class="faq-chevron">▾</span></button><div class="faq-a">Oui, certains clubs proposent la réservation à la séance via leur site web. Cela nécessite un système distinct de TenUp, qui est réservé aux membres licenciés.</div></div></div>`},
  'inscription':{tag:'Automatisation',emoji:'📝',readTime:'8 min',title:'Gérer les <em>inscriptions aux stages de tennis</em> sans effort',intro:'Chaque vacance scolaire, les inscriptions aux stages représentent des heures de gestion. Emails, chèques, dossiers incomplets… Il existe une meilleure façon de faire.',toc:[['probleme','Le problème des inscriptions manuelles'],['solution','La solution automatisée'],['parcours','Le parcours d\'inscription idéal'],['paiement','Paiements et acomptes'],['faq','Questions fréquentes']],content:`<h2 id="probleme">1. Le problème réel des inscriptions manuelles</h2><div class="stat-strip"><div class="stat-strip-item"><span class="stat-strip-num">25h</span><span class="stat-strip-lbl">en moyenne pour gérer les inscriptions d'un stage de 40 enfants sans outil</span></div><div class="stat-strip-item"><span class="stat-strip-num">1/5</span><span class="stat-strip-lbl">des dossiers est incomplet à la première soumission</span></div><div class="stat-strip-item"><span class="stat-strip-num">12%</span><span class="stat-strip-lbl">des places réservées ne sont jamais payées sans paiement en ligne</span></div></div><h2 id="solution">2. La solution : le formulaire en ligne automatisé</h2><p>Un formulaire bien conçu permet d'ouvrir les inscriptions à une date précise, de recueillir tous les documents en une fois, de sécuriser le paiement immédiatement, d'envoyer des confirmations automatiques et de gérer une liste d'attente.</p><h2 id="parcours">3. Le parcours d'inscription idéal</h2><ol><li><strong>Page du stage :</strong> description, dates, horaires, niveau, photos, tarifs, bouton S'inscrire</li><li><strong>Formulaire :</strong> informations de l'enfant, coordonnées parent, choix du créneau</li><li><strong>Documents :</strong> téléversement certificat médical et autorisation parentale</li><li><strong>Paiement :</strong> Stripe, en une ou plusieurs fois selon le paramétrage</li><li><strong>Confirmation :</strong> email automatique avec tous les détails du stage</li></ol><h2 id="paiement">4. Paiements et acomptes</h2><p><strong>Paiement intégral :</strong> la place n'est confirmée qu'après paiement. Supprime totalement les impayés.</p><p><strong>Acompte + solde :</strong> 30-50% à l'inscription, solde à une date définie. Réduit la barrière à l'entrée.</p><p><strong>Paiement en 2-3 fois :</strong> Stripe gère automatiquement les mensualités. Excellent argument pour les familles avec plusieurs enfants.</p><blockquote>« On avait habituellement 8 à 10 impayés par stage. Depuis qu'on est passé au paiement en ligne obligatoire, c'est zéro. »<cite>— Responsable des stages, club de 850 membres, Rhône-Alpes</cite></blockquote><h2 id="faq">Questions fréquentes</h2><div class="faq-list"><div class="faq-item"><button class="faq-q" onclick="window.toggleFaq(this)">Comment gérer les inscriptions aux stages en ligne ?<span class="faq-chevron">▾</span></button><div class="faq-a">Un formulaire en ligne avec paiement sécurisé (Stripe) et téléversement du certificat médical. Le club reçoit une notification à chaque inscription et dispose d'un tableau de bord en temps réel.</div></div><div class="faq-item"><button class="faq-q" onclick="window.toggleFaq(this)">Peut-on proposer le paiement en plusieurs fois ?<span class="faq-chevron">▾</span></button><div class="faq-a">Oui, Stripe permet le paiement en 2 ou 3 fois sans frais pour l'adhérent. C'est un argument fort pour remplir les stages, en particulier pour les familles avec plusieurs enfants.</div></div></div>`},
  'automatisation':{tag:'Productivité',emoji:'⚙️',readTime:'7 min',title:'<em>Automatiser la gestion</em> de votre club de tennis : par où commencer ?',intro:'Chaque heure passée sur de l\'administratif répétitif est une heure de moins sur le terrain. L\'automatisation n\'est pas réservée aux grandes structures.',toc:[['quoi','Ce qu\'on peut automatiser'],['priorites','Les 3 automatisations les plus rentables'],['outils','Les outils à combiner'],['roi','ROI concret'],['faq','Questions fréquentes']],content:`<h2 id="quoi">1. Ce qu'on peut automatiser dans un club de tennis</h2><p>Inscriptions aux stages, renouvellements, relances impayés, réponses aux questions fréquentes, annulations courts, rapports de fréquentation — une grande partie de l'administratif répétitif peut être automatisée avec les bons outils.</p><h2 id="priorites">2. Les 3 automatisations les plus rentables</h2><div class="stat-strip"><div class="stat-strip-item"><span class="stat-strip-num">1</span><span class="stat-strip-lbl">Inscriptions + paiement en ligne — retour immédiat, zéro impayé</span></div><div class="stat-strip-item"><span class="stat-strip-num">2</span><span class="stat-strip-lbl">FAQ & infos pratiques sur le site — −40% d'appels entrants</span></div><div class="stat-strip-item"><span class="stat-strip-num">3</span><span class="stat-strip-lbl">Rappels de renouvellement — +15% de taux de réabonnement</span></div></div><h2 id="outils">3. Les outils à combiner</h2><ul><li><strong>TenUp (FFT)</strong> — Base de données membres, réservations, licences</li><li><strong>AceStrike</strong> — Site vitrine, formulaires automatisés, paiement Stripe, sponsors</li><li><strong>Brevo ou Mailchimp</strong> — Newsletters et rappels automatiques</li><li><strong>Stripe</strong> — Paiement sécurisé, relances automatiques, facturation</li></ul><h2 id="roi">4. ROI concret</h2><p>Exemple : club de 500 adhérents, 4 stages/an de 40 enfants. Temps d'inscription manuelle : 20h/stage. Économie avec automatisation : 16h × 4 = <strong>64h récupérées/an</strong>. Impayés évités : 5 × 150€ = <strong>750€/an</strong>.</p><blockquote>« On a mis 3 semaines à tout configurer. Depuis, les inscriptions aux stages tombent toutes seules. »<cite>— Président, club de 620 adhérents, Occitanie</cite></blockquote><h2 id="faq">Questions fréquentes</h2><div class="faq-list"><div class="faq-item"><button class="faq-q" onclick="window.toggleFaq(this)">Par quoi commencer pour automatiser son club ?<span class="faq-chevron">▾</span></button><div class="faq-a">Commencez par les inscriptions aux stages avec paiement en ligne : ROI le plus rapide et le plus visible. En deux à trois semaines, vous pouvez avoir un formulaire opérationnel.</div></div><div class="faq-item"><button class="faq-q" onclick="window.toggleFaq(this)">L'automatisation remplace-t-elle les bénévoles ?<span class="faq-chevron">▾</span></button><div class="faq-a">Non, elle les libère. Elle prend en charge les tâches répétitives pour que les bénévoles se concentrent sur ce qui compte vraiment : l'accueil, l'animation, la vie du club.</div></div></div>`},
  'paiement':{tag:'Finance & Sécurité',emoji:'💳',readTime:'7 min',title:'Mettre en place le <em>paiement en ligne</em> dans votre club de tennis',intro:'Les chèques, les espèces, les virements oubliés : la gestion des paiements dans un club de tennis est une source de stress et d\'impayés. Voici comment moderniser tout ça.',toc:[['etat','État des lieux'],['avantages','Les avantages du paiement en ligne'],['stripe','Stripe : la solution recommandée'],['mise','Mise en place'],['faq','Questions fréquentes']],content:`<h2 id="etat">1. Comment les clubs encaissent aujourd'hui</h2><div class="stat-strip"><div class="stat-strip-item"><span class="stat-strip-num">8%</span><span class="stat-strip-lbl">du chiffre d'affaires perdu en impayés non détectés</span></div><div class="stat-strip-item"><span class="stat-strip-num">3h</span><span class="stat-strip-lbl">par semaine passées sur la comptabilité des paiements entrants</span></div><div class="stat-strip-item"><span class="stat-strip-num">23%</span><span class="stat-strip-lbl">d'abandons d'inscription quand seul le chèque est accepté</span></div></div><h2 id="avantages">2. Les avantages concrets du paiement en ligne</h2><ul><li>Zéro impayé non tracé — chaque transaction est horodatée et confirmée</li><li>Moins de friction à l'inscription — le parent paie en 30 secondes depuis son téléphone</li><li>Réconciliation comptable automatique — Stripe génère des rapports détaillés</li><li>Remboursements simplifiés — en un clic depuis le tableau de bord</li><li>Paiement en plusieurs fois sans effort supplémentaire</li></ul><h2 id="stripe">3. Stripe : pourquoi c'est la solution recommandée</h2><p><strong>Tarification transparente :</strong> 1,5% + 0,25€ par transaction pour les cartes européennes. Pas d'abonnement mensuel. Pour un stage à 150€, la commission est d'environ 2,50€.</p><p><strong>Paiement en 2-3 fois :</strong> Stripe propose nativement l'échelonnement avec relances automatiques en cas d'échec.</p><div class="highlight-box"><p>🔒 <strong>Sécurité :</strong> Stripe est conforme PCI DSS. Les informations de carte ne transitent jamais par vos serveurs — tout est géré par Stripe. Même technologie qu'Amazon ou Doctolib.</p></div><h2 id="mise">4. Mise en place</h2><ol><li>Créer un compte Stripe pour votre association (gratuit, validation en 48h)</li><li>Connecter Stripe à votre formulaire d'inscription — AceStrike intègre cette connexion nativement</li><li>Configurer vos produits : cotisations, stages, cours à la séance</li><li>Définir les règles de remboursement clairement sur le site</li></ol><h2 id="faq">Questions fréquentes</h2><div class="faq-list"><div class="faq-item"><button class="faq-q" onclick="window.toggleFaq(this)">Est-ce qu'une association peut utiliser Stripe ?<span class="faq-chevron">▾</span></button><div class="faq-a">Oui, Stripe accepte les associations loi 1901. Il faudra fournir le numéro SIRET, les statuts et les informations du représentant légal lors de la création du compte.</div></div><div class="faq-item"><button class="faq-q" onclick="window.toggleFaq(this)">Quels sont les frais de Stripe pour un club de tennis ?<span class="faq-chevron">▾</span></button><div class="faq-a">1,5% + 0,25€ par transaction pour les cartes européennes. Pas d'abonnement mensuel. Pour un stage à 150€, environ 2,50€ — bien moins qu'un impayé.</div></div></div>`},
  'trouver':{tag:'Guide Joueurs',emoji:'🗺',readTime:'6 min',title:'<em>Trouver un court de tennis</em> disponible : toutes les options en 2025',intro:'Clubs affiliés FFT, courts municipaux, réservation à la séance : le tennis en France n\'a jamais été aussi accessible. Encore faut-il savoir où chercher.',toc:[['options','Les différentes options'],['fft','Clubs FFT et TenUp'],['municipaux','Courts municipaux'],['trouver','Comment trouver'],['presidents','Pour les présidents de clubs'],['faq','Questions fréquentes']],content:`<h2 id="options">1. Les différentes options pour jouer au tennis</h2><p><strong>Club affilié FFT :</strong> meilleure option pour jouer régulièrement. Accès aux courts, cours, tournois. Nécessite une licence FFT.</p><p><strong>Courts municipaux :</strong> souvent moins chers, parfois gratuits. Qualité variable. Pas de licence requise.</p><p><strong>Courts indoor privés :</strong> accès sans licence. Idéal en hiver. Tarifs plus élevés (12–25€/h).</p><h2 id="fft">2. Clubs FFT et TenUp : réserver en tant que non-membre</h2><p>TenUp est destiné principalement aux membres licenciés. Certains clubs utilisent aussi des systèmes complémentaires pour proposer des créneaux aux joueurs occasionnels. Pour trouver un club FFT : rendez-vous sur fft.fr ou utilisez Google Maps.</p><h2 id="municipaux">3. Courts municipaux et gratuits</h2><p>De nombreuses communes mettent des courts à disposition gratuitement. Pour les trouver, cherchez "courts de tennis [votre ville] réservation" ou consultez le site de votre mairie.</p><h2 id="trouver">4. Comment trouver un court rapidement</h2><p><strong>Google Maps :</strong> tapez "club de tennis" avec votre localisation activée. Les clubs avec une fiche Google Business complète apparaissent en premier.</p><p><strong>TenUp :</strong> propose une carte des clubs affiliés FFT avec réservation intégrée pour les membres.</p><h2 id="presidents">5. Pour les présidents de clubs : être trouvé en ligne</h2><p>Quand un joueur cherche "club de tennis [votre ville]" sur Google, est-ce que votre club apparaît ? Les trois leviers : Google Business Profile complet, site web optimisé SEO local, avis Google positifs.</p><h2 id="faq">Questions fréquentes</h2><div class="faq-list"><div class="faq-item"><button class="faq-q" onclick="window.toggleFaq(this)">Comment réserver un court sans être licencié FFT ?<span class="faq-chevron">▾</span></button><div class="faq-a">Courts municipaux (souvent accessibles sans licence), clubs privés, ou clubs FFT qui proposent des créneaux aux non-membres. Renseignez-vous directement auprès des clubs de votre ville.</div></div><div class="faq-item"><button class="faq-q" onclick="window.toggleFaq(this)">Quelle application pour trouver un court en France ?<span class="faq-chevron">▾</span></button><div class="faq-a">TenUp pour les clubs affiliés FFT. Pour les courts municipaux, chaque ville a son propre système. Google Maps reste la méthode la plus simple pour trouver un court à proximité.</div></div></div>`},
  'paris':{tag:'📍 Paris & Île-de-France',emoji:'🗼',readTime:'5 min',title:'Gestion de <em>club de tennis à Paris</em> : la solution pour l\'Île-de-France',intro:'Les clubs de tennis parisiens font face à des défis spécifiques : concurrence forte du padel, public exigeant, attentes numériques élevées. AceStrike accompagne les clubs franciliens.',toc:[['contexte','Le tennis en Île-de-France'],['defis','Les défis spécifiques'],['solution','Ce qu\'AceStrike apporte'],['faq','Questions fréquentes']],content:`<div class="highlight-box"><p>🎾 <strong>Le tennis en Île-de-France :</strong> plus de 800 clubs affiliés FFT, environ 180 000 licenciés. La région avec la plus forte densité de clubs — et la plus forte concurrence, notamment avec les centres de padel.</p></div><h2 id="defis">Les défis spécifiques des clubs parisiens</h2><p>Les familles parisiennes ont l'habitude des services numériques fluides. Un club qui propose encore des inscriptions par courrier perd du terrain face aux centres de padel qui offrent une app mobile soignée.</p><p><strong>La concurrence du padel :</strong> Paris et sa banlieue ont vu émerger de nombreux centres depuis 2020. Pour les clubs de tennis, la réponse passe par une modernisation similaire — pas pour copier le padel, mais pour offrir la même fluidité d'expérience.</p><h2 id="solution">Ce qu'AceStrike apporte aux clubs parisiens</h2><div class="stat-strip"><div class="stat-strip-item"><span class="stat-strip-num">+35%</span><span class="stat-strip-lbl">de demandes via le site dans les 3 mois suivant la refonte</span></div><div class="stat-strip-item"><span class="stat-strip-num">−50%</span><span class="stat-strip-lbl">d'appels entrants grâce à la FAQ et aux infos centralisées</span></div><div class="stat-strip-item"><span class="stat-strip-num">×3</span><span class="stat-strip-lbl">sponsors locaux convaincus grâce à l'espace partenaires</span></div></div><h2 id="faq">Questions fréquentes</h2><div class="faq-list"><div class="faq-item"><button class="faq-q" onclick="window.toggleFaq(this)">Y a-t-il des aides régionales pour la digitalisation des clubs en Île-de-France ?<span class="faq-chevron">▾</span></button><div class="faq-a">La Région Île-de-France propose régulièrement des aides pour la modernisation des associations sportives. Renseignez-vous auprès du CRT Île-de-France ou du Mouvement Associatif d'Île-de-France.</div></div><div class="faq-item"><button class="faq-q" onclick="window.toggleFaq(this)">Comment un club parisien peut-il se démarquer du padel ?<span class="faq-chevron">▾</span></button><div class="faq-a">En offrant la même qualité d'expérience numérique : réservation en ligne fluide, inscriptions automatisées, site moderne. Le tennis a des atouts que le padel n'a pas — l'histoire, la tradition, les tournois.</div></div></div>`},
  'lyon':{tag:'📍 Lyon & Auvergne-Rhône-Alpes',emoji:'🦁',readTime:'5 min',title:'Gestion de <em>club de tennis à Lyon</em> : la solution numérique pour les clubs lyonnais',intro:'Avec plus de 300 clubs affiliés FFT en Auvergne-Rhône-Alpes, Lyon est l\'une des villes les plus actives du tennis français. AceStrike aide les clubs lyonnais à se moderniser.',toc:[['contexte','Le tennis en AuRA'],['enjeux','Les enjeux lyonnais'],['solution','AceStrike pour Lyon'],['faq','Questions fréquentes']],content:`<div class="highlight-box"><p>🎾 <strong>Le tennis en Auvergne-Rhône-Alpes :</strong> plus de 300 clubs affiliés FFT et environ 85 000 licenciés. Lyon et sa métropole concentrent une forte dynamique sportive avec une population jeune et connectée.</p></div><h2 id="enjeux">Les enjeux des clubs lyonnais</h2><p>Lyon est une ville étudiante et jeune, avec une forte culture numérique. Les adhérents de 25-45 ans sont habitués aux services en ligne et s'attendent à la même fluidité de leur club sportif.</p><p><strong>Une population très mobile :</strong> Les Lyonnais bougent souvent — études, mutations, changements de quartier. Un club visible sur Google recrute plus facilement les nouveaux arrivants dans la métropole.</p><h2 id="solution">AceStrike pour les clubs lyonnais</h2><div class="stat-strip"><div class="stat-strip-item"><span class="stat-strip-num">2 sem</span><span class="stat-strip-lbl">pour déployer le portail d'inscription dans votre club</span></div><div class="stat-strip-item"><span class="stat-strip-num">100%</span><span class="stat-strip-lbl">compatible TenUp — vous gardez votre outil existant</span></div><div class="stat-strip-item"><span class="stat-strip-num">0€</span><span class="stat-strip-lbl">de frais cachés — tarif transparent adapté aux budgets associatifs</span></div></div><h2 id="faq">Questions fréquentes</h2><div class="faq-list"><div class="faq-item"><button class="faq-q" onclick="window.toggleFaq(this)">Comment être mieux référencé sur Google pour "club tennis Lyon" ?<span class="faq-chevron">▾</span></button><div class="faq-a">Trois leviers : une fiche Google Business complète, un site avec les mots-clés locaux ("club tennis Lyon", votre arrondissement), et des avis Google réguliers. AceStrike optimise les deux derniers.</div></div></div>`},
  'bordeaux':{tag:'📍 Bordeaux & Nouvelle-Aquitaine',emoji:'🍷',readTime:'5 min',title:'Gestion de <em>club de tennis à Bordeaux</em> : votre partenaire numérique',intro:'Bordeaux Métropole connaît une croissance démographique forte. Pour les clubs de tennis bordelais, c\'est une opportunité de recrutement — à condition d\'être visible en ligne.',toc:[['contexte','Le tennis en Nouvelle-Aquitaine'],['specifiques','Spécificités bordelaises'],['solution','AceStrike pour Bordeaux'],['faq','Questions fréquentes']],content:`<div class="highlight-box"><p>🎾 <strong>Le tennis en Nouvelle-Aquitaine :</strong> plus de 500 clubs affiliés FFT et environ 120 000 licenciés. La région est l'une des plus dynamiques de France avec un ensoleillement favorable qui prolonge la saison extérieure.</p></div><h2 id="specifiques">Les spécificités des clubs bordelais</h2><p>Bordeaux accueille chaque année des milliers de nouveaux habitants. Un club avec un site web clair et des inscriptions en ligne recrute facilement les nouveaux arrivants.</p><p><strong>L'avantage climatique à valoriser :</strong> La région bénéficie d'un ensoleillement exceptionnel. C'est un argument fort pour les stages estivaux — encore faut-il le mettre en avant avec des photos récentes et des stages bien remplis grâce à un système efficace.</p><h2 id="solution">AceStrike pour les clubs bordelais</h2><div class="stat-strip"><div class="stat-strip-item"><span class="stat-strip-num">+45%</span><span class="stat-strip-lbl">de visibilité locale sur Google dans les 6 മാസ</mo></span></div><div class="stat-strip-item"><span class="stat-strip-num">0</span><span class="stat-strip-lbl">impayé sur les stages avec paiement en ligne obligatoire</span></div><div class="stat-strip-item"><span class="stat-strip-num">48h</span><span class="stat-strip-lbl">pour traiter les inscriptions d'un stage complet vs 2 semaines en manuel</span></div></div><h2 id="faq">Questions fréquentes</h2><div class="faq-list"><div class="faq-item"><button class="faq-q" onclick="window.toggleFaq(this)">Comment attirer les nouveaux arrivants à Bordeaux ?<span class="faq-chevron">▾</span></button><div class="faq-a">La première chose que fait un nouvel arrivant à Bordeaux, c'est chercher sur Google. Un site bien référencé avec des infos pratiques claires et une possibilité d'inscription en ligne est votre meilleur outil de recrutement.</div></div></div>`}
};

export default function Home() {
  const [activePage, setActivePage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    
    // Add SEO Script
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context":"https://schema.org",
      "@type":"Organization",
      "name":"AceStrike",
      "description":"Solution web sur-mesure pour clubs de tennis affiliés FFT",
      "url":"https://acestrike.fr",
      "founder":{"@type":"Person","name":"Amaury Despretz"},
      "areaServed":"FR",
      "serviceType":"Création de site web et gestion numérique pour clubs de tennis"
    });
    document.head.appendChild(script);

    // Provide toggleFaq to global window for dangerouslySetInnerHTML
    (window as unknown as Record<string, unknown>).toggleFaq = function(btn: HTMLElement) {
      btn.closest('.faq-item')?.classList.toggle('open');
    };
  }, []);

  useEffect(() => {
    // initReveal
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
  }, [activePage, activeArticle]);

  const showPage = (pageId: string) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo(0,0);
  };

  const showArticle = (slug: string) => {
    setActiveArticle(slug);
    setActivePage('article');
    setMobileMenuOpen(false);
    window.scrollTo(0,0);
  };

  const submitForm = () => {
    setFormSubmitted(true);
  };

  const renderArticle = () => {
    if (!activeArticle) return null;
    const data = ARTICLES[activeArticle];
    if (!data) return null;
    
    const tocHtml = data.toc.map(([id,label]: [string, string]) =>
      `<li><a href="#${id}" onclick="event.preventDefault();document.getElementById('${id}')?.scrollIntoView({behavior:'smooth'})">${label}</a></li>`
    ).join('');

    const htmlContent = `
      <section class="article-hero">
        <div class="court-bg-dark"></div>
        <div class="article-hero-inner">
          <button class="back-btn" onclick="document.getElementById('back-btn-proxy').click()">← Retour au blog</button>
          <div class="article-eyebrow">\${data.tag}</div>
          <h1>\${data.title}</h1>
          <p class="article-hero-intro">\${data.intro}</p>
          <div class="article-meta">
            <span>Par <strong>Amaury Despretz</strong></span>
            <span><strong>1 septembre 2025</strong></span>
            <span>Lecture : <strong>${data.readTime}</strong></span>
          </div>
        </div>
      </section>
      <div class="article-body-wrap">
        <div class="toc-box">
          <div class="toc-box-title">Dans cet article</div>
          <ol>${tocHtml}</ol>
        </div>
        <div class="article-content">${data.content}</div>
        <div class="divider mt-8"></div>
        <div style="text-align:center;padding:32px 0;">
          <p style="font-size:14px;color:var(--muted);margin-bottom:20px;">Prêt à moderniser votre club ?</p>
          <button class="acid-cta" onclick="document.getElementById('demo-btn-proxy').click()">Réserver une démo gratuite →</button>
        </div>
        <div class="author-box">
          <div class="author-avatar">A</div>
          <div class="author-info">
            <strong>Amaury Despretz</strong>
            <span>Fondateur d'AceStrike · Développeur web spécialisé clubs de tennis · Bachelor en Techniques de vente B2B</span>
          </div>
        </div>
      </div>
    `;

    return (
      <div className="page active" id="page-article">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        {/* Hidden proxy buttons for onclick handlers inside dangerouslySetInnerHTML */}
        <button id="back-btn-proxy" style={{display: 'none'}} onClick={() => showPage('blog')}></button>
        <button id="demo-btn-proxy" style={{display: 'none'}} onClick={() => showPage('contact')}></button>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>AceStrike — Moins d&apos;administratif, plus de jeu. Set et Match.</title>
        <meta name="description" content="AceStrike modernise les clubs de tennis : site web sur-mesure, inscriptions en ligne, paiements sécurisés et référencement local. La solution complémentaire de TenUp." />
      </Head>

      {/* NAV */}
      <nav>
        <div className="nav-logo" onClick={() => showPage('home')}>AceStrike <span>🎾</span></div>
        <div className="nav-links">
          <button onClick={() => showPage('offre')}>Offre</button>
          <button onClick={() => showPage('fonctionnalites')}>Fonctionnalités</button>
          <div className="nav-dropdown">
            <button>Blog ▾</button>
            <div className="nav-dropdown-menu">
              <button onClick={() => showArticle('gestion-club')}>Gestion club de tennis</button>
              <button onClick={() => showArticle('site-web')}>Site web club de tennis</button>
              <button onClick={() => showArticle('reservation')}>Réservation courts</button>
              <button onClick={() => showArticle('inscription')}>Inscriptions stages</button>
              <button onClick={() => showArticle('automatisation')}>Automatisation</button>
              <button onClick={() => showArticle('paiement')}>Paiement en ligne</button>
              <button onClick={() => showArticle('trouver')}>Trouver un court</button>
              <button onClick={() => showArticle('alternative-tenup')}>Alternative TenUp</button>
            </div>
          </div>
          <div className="nav-dropdown">
            <button>Régions ▾</button>
            <div className="nav-dropdown-menu">
              <button onClick={() => showArticle('paris')}>Paris & Île-de-France</button>
              <button onClick={() => showArticle('lyon')}>Lyon & AuRA</button>
              <button onClick={() => showArticle('bordeaux')}>Bordeaux & Nouvelle-Aquitaine</button>
            </div>
          </div>
          <button onClick={() => showPage('contact')} className="nav-cta">Démo gratuite →</button>
        </div>
        <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <button onClick={() => showPage('offre')}>Offre</button>
        <button onClick={() => showPage('fonctionnalites')}>Fonctionnalités</button>
        <button onClick={() => showPage('blog')}>Blog</button>
        <button onClick={() => showArticle('alternative-tenup')}>Alternative TenUp</button>
        <button onClick={() => showArticle('paris')}>Paris</button>
        <button onClick={() => showArticle('lyon')}>Lyon</button>
        <button onClick={() => showArticle('bordeaux')}>Bordeaux</button>
        <button onClick={() => showPage('contact')} className="nav-cta">Démo gratuite →</button>
      </div>

      {/* PAGE: HOME */}
      <div className={`page ${activePage === 'home' ? 'active' : ''}`} id="page-home">
        <section className="hero">
          <div className="hero-court"></div>
          <div className="hero-circle"></div>
          <div className="hero-circle2"></div>
          <div className="hero-net"></div>
          <div className="hero-inner">
            <div className="hero-eyebrow">Solution numérique pour clubs de tennis</div>
            <h1>Moins d&apos;administratif,<br/><em>plus de jeu.</em><br/>Set et Match.</h1>
            <p className="hero-sub">AceStrike aide les clubs de tennis affiliés FFT à moderniser leur gestion : site web sur-mesure, inscriptions en ligne, paiements automatisés et référencement local. Complémentaire à TenUp.</p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => showPage('contact')}>Réserver une démo →</button>
              <button className="btn-secondary" onClick={() => showPage('offre')}>Voir l&apos;offre</button>
            </div>
            <div className="hero-stats">
              <div>
                <span className="hero-stat-num">−40%</span>
                <p className="hero-stat-txt">d&apos;appels entrants au secrétariat</p>
              </div>
              <div>
                <span className="hero-stat-num">0</span>
                <p className="hero-stat-txt">impayé sur les stages avec paiement en ligne</p>
              </div>
              <div>
                <span className="hero-stat-num">2 min</span>
                <p className="hero-stat-txt">pour s&apos;inscrire à un stage depuis son téléphone</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section court-bg">
          <div className="section-inner">
            <div className="split">
              <div>
                <span className="section-tag">Le problème</span>
                <h2 className="section-h2">Votre club mérite mieux qu&apos;un site vitrine de <em>2017</em></h2>
                <p className="section-intro">TenUp gère vos licences. Mais qui gère votre image, vos inscriptions aux stages et vos sponsors ? Pendant que vos adhérents cherchent un court sur Google, votre club reste invisible.</p>
                <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'12px'}}>
                  <li style={{display:'flex',gap:'10px',alignItems:'flex-start',fontSize:'15px',color:'#333'}}><span style={{color:'#c0392b',fontSize:'18px',flexShrink:0,marginTop:'2px'}}>✗</span>Inscriptions aux stages par email et chèque</li>
                  <li style={{display:'flex',gap:'10px',alignItems:'flex-start',fontSize:'15px',color:'#333'}}><span style={{color:'#c0392b',fontSize:'18px',flexShrink:0,marginTop:'2px'}}>✗</span>Secrétariat saturé à chaque rentrée sportive</li>
                  <li style={{display:'flex',gap:'10px',alignItems:'flex-start',fontSize:'15px',color:'#333'}}><span style={{color:'#c0392b',fontSize:'18px',flexShrink:0,marginTop:'2px'}}>✗</span>Site vieillissant qui fait fuir les sponsors</li>
                  <li style={{display:'flex',gap:'10px',alignItems:'flex-start',fontSize:'15px',color:'#333'}}><span style={{color:'#c0392b',fontSize:'18px',flexShrink:0,marginTop:'2px'}}>✗</span>Impayés non tracés, dossiers incomplets</li>
                </ul>
              </div>
              <div className="split-visual">
                <div className="court-bg-dark"></div>
                <div style={{position:'relative'}}>
                  <div style={{color:'rgba(255,255,255,.4)',fontSize:'12px',fontWeight:500,letterSpacing:'.6px',textTransform:'uppercase',marginBottom:'12px'}}>Dashboard AceStrike</div>
                  <div className="mock-screen">
                    <div className="mock-bar acid"></div>
                    <div className="mock-bar" style={{width:'80%'}}></div>
                    <div className="mock-bar short"></div>
                    <div className="mock-stat">
                      <div className="mock-stat-box"><span className="mock-stat-num">48</span><span className="mock-stat-lbl">Inscriptions stages</span></div>
                      <div className="mock-stat-box"><span className="mock-stat-num">0</span><span className="mock-stat-lbl">Impayés</span></div>
                    </div>
                  </div>
                  <div style={{marginTop:'16px',background:'rgba(200,240,60,.08)',border:'1px solid rgba(200,240,60,.2)',borderRadius:'8px',padding:'14px',display:'flex',alignItems:'center',gap:'12px'}}>
                    <span style={{fontSize:'20px'}}>✅</span>
                    <div>
                      <div style={{color:'white',fontSize:'13px',fontWeight:500}}>Nouveau : Stage Toussaint complet</div>
                      <div style={{color:'rgba(255,255,255,.4)',fontSize:'12px'}}>23 inscriptions — paiement encaissé</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{background:'white'}}>
          <div className="section-inner">
            <div style={{textAlign:'center',maxWidth:'560px',margin:'0 auto 48px'}}>
              <span className="section-tag">Ce qu&apos;on fait</span>
              <h2 className="section-h2">Tout ce que <em>TenUp ne fait pas</em></h2>
              <p className="section-intro mb-0">AceStrike prend en charge la partie publique de votre club. Vous gardez TenUp pour la gestion interne.</p>
            </div>
            <div className="features-grid">
              <div className="feature-card reveal">
                <div className="feature-icon">🌐</div>
                <h3>Site vitrine moderne</h3>
                <p>Un site qui valorise vos courts, vos profs et votre ambiance. Mobile-first, rapide, optimisé SEO. Votre meilleur commercial, disponible 24h/24.</p>
              </div>
              <div className="feature-card reveal">
                <div className="feature-icon">📋</div>
                <h3>Inscriptions automatisées</h3>
                <p>Formulaire intelligent avec téléversement du certificat médical. Le parent s&apos;inscrit en 2 minutes, vous recevez une notification. Fini les emails.</p>
              </div>
              <div className="feature-card reveal">
                <div className="feature-icon">💳</div>
                <h3>Paiement sécurisé Stripe</h3>
                <p>Cotisations, stages, cours à la séance. Paiement en 2 ou 3 fois disponible. Zéro chèque, zéro impayé non tracé, réconciliation comptable automatique.</p>
              </div>
              <div className="feature-card reveal">
                <div className="feature-icon">📅</div>
                <h3>Réservation courts</h3>
                <p>Intégration TenUp pour les membres existants. Page publique pour les visiteurs. État des courts en temps réel — fini les appels &quot;le court est praticable ?&quot;</p>
              </div>
              <div className="feature-card reveal">
                <div className="feature-icon">🤝</div>
                <h3>Espace partenaires</h3>
                <p>Encarts sponsors avec statistiques de visibilité (vues/clics). Un argument commercial concret. Deux &quot;Packs Digitaux&quot; vendus couvrent souvent le coût annuel.</p>
              </div>
              <div className="feature-card reveal">
                <div className="feature-icon">🔍</div>
                <h3>SEO local intégré</h3>
                <p>Schema.org, Google Business Profile, contenu ciblé par ville. Apparaissez en premier quand une famille cherche &quot;club tennis [votre ville]&quot; sur Google.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section court-bg">
          <div className="section-inner">
            <div style={{textAlign:'center',maxWidth:'560px',margin:'0 auto 40px'}}>
              <span className="section-tag">Comparatif</span>
              <h2 className="section-h2">AceStrike vs les <em>alternatives</em></h2>
            </div>
            <div className="compare-wrap reveal">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th>Fonctionnalité</th>
                    <th>TenUp seul</th>
                    <th>WordPress DIY</th>
                    <th className="col-as">TenUp + AceStrike</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Gestion licences FFT</td><td><span className="ck">✓</span> Natif</td><td><span className="cx">✗</span></td><td><span className="ck">✓</span> Via TenUp</td></tr>
                  <tr><td>Site vitrine moderne</td><td><span className="cx">✗</span></td><td><span className="cp">⚡ Selon compétences</span></td><td><span className="ck">✓</span> Sur-mesure</td></tr>
                  <tr><td>Inscriptions stages en ligne</td><td><span className="cx">✗</span></td><td><span className="cx">✗</span></td><td><span className="ck">✓</span> Automatisé</td></tr>
                  <tr><td>Paiement sécurisé</td><td><span className="cx">✗</span></td><td><span className="cx">✗</span></td><td><span className="ck">✓</span> Stripe intégré</td></tr>
                  <tr><td>Espace sponsors</td><td><span className="cx">✗</span></td><td><span className="cx">✗</span></td><td><span className="ck">✓</span> Avec stats</td></tr>
                  <tr><td>SEO local optimisé</td><td><span className="cx">✗</span></td><td><span className="cp">⚡ Si expertise</span></td><td><span className="ck">✓</span> Natif</td></tr>
                  <tr><td>Maintenance assurée</td><td><span className="ck">✓</span> FFT</td><td><span className="cx">✗</span> Vous</td><td><span className="ck">✓</span> AceStrike</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section" style={{background:'white'}}>
          <div className="section-inner">
            <div style={{textAlign:'center',maxWidth:'480px',margin:'0 auto 40px'}}>
              <span className="section-tag">Témoignages</span>
              <h2 className="section-h2">Ce que disent les <em>présidents de club</em></h2>
            </div>
            <div className="testimonial-grid">
              <div className="testimonial-card reveal">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">« On avait habituellement 8 à 10 impayés par stage. Depuis qu&apos;on est passé au paiement en ligne obligatoire, c&apos;est zéro. Et on a rempli les stages plus vite. »</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">B</div>
                  <div>
                    <div className="testimonial-name">Brice M.</div>
                    <div className="testimonial-role">Directeur Général, club 850 membres · Île-de-France</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-card reveal">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">« On recevait 15 appels par jour pluvieux pour savoir si les courts étaient jouables. Depuis qu&apos;on a une page d&apos;état sur le site, c&apos;est tombé à presque zéro. »</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">S</div>
                  <div>
                    <div className="testimonial-name">Sophie L.</div>
                    <div className="testimonial-role">Secrétaire générale, club 620 membres · Bretagne</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-card reveal">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">« En 3 semaines, le portail d&apos;inscription était opérationnel pour les stages de Toussaint. Le secrétaire a récupéré facilement 5 heures par semaine. »</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">M</div>
                  <div>
                    <div className="testimonial-name">Marc T.</div>
                    <div className="testimonial-role">Président, club 500 membres · Rhône-Alpes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="court-bg-dark"></div>
          <div className="cta-section-inner">
            <h2>Prêt à <em>libérer votre secrétariat</em> ?</h2>
            <p>15 minutes de démo, sans engagement. On vous montre ce qu&apos;AceStrike peut faire pour votre club spécifiquement.</p>
            <button className="acid-cta" onClick={() => showPage('contact')}>Réserver une démo gratuite →</button>
          </div>
        </section>

        <section className="section court-bg">
          <div className="section-inner">
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'32px',flexWrap:'wrap',gap:'16px'}}>
              <div>
                <span className="section-tag">Ressources</span>
                <h2 className="section-h2 mb-0">Guides & <em>Articles</em></h2>
              </div>
              <button className="inline-cta" onClick={() => showPage('blog')}>Voir tous les articles →</button>
            </div>
            <div className="blog-grid">
              <div className="blog-card" onClick={() => showArticle('alternative-tenup')}>
                <div className="blog-card-thumb"><div className="blog-thumb-bg"></div><div className="blog-thumb-emoji">⚡</div><span className="blog-card-tag">Comparatif</span></div>
                <div className="blog-card-body">
                  <h3>Alternative à TenUp pour club de tennis : le comparatif 2025</h3>
                  <p>TenUp ne suffit plus ? Découvrez ce que la solution complémentaire AceStrike apporte.</p>
                  <div className="blog-card-meta"><span>Amaury Despretz</span><span>7 min</span></div>
                </div>
              </div>
              <div className="blog-card" onClick={() => showArticle('inscription')}>
                <div className="blog-card-thumb"><div className="blog-thumb-bg"></div><div className="blog-thumb-emoji">📝</div><span className="blog-card-tag">Automatisation</span></div>
                <div className="blog-card-body">
                  <h3>Gérer les inscriptions aux stages de tennis sans effort</h3>
                  <p>Formulaire en ligne, paiement, certificats médicaux : le parcours d&apos;inscription idéal.</p>
                  <div className="blog-card-meta"><span>Amaury Despretz</span><span>8 min</span></div>
                </div>
              </div>
              <div className="blog-card" onClick={() => showArticle('gestion-club')}>
                <div className="blog-card-thumb"><div className="blog-thumb-bg"></div><div className="blog-thumb-emoji">🎾</div><span className="blog-card-tag">Guide complet</span></div>
                <div className="blog-card-body">
                  <h3>La gestion d&apos;un club de tennis moderne : tout ce qu&apos;il faut savoir</h3>
                  <p>Licences, réservations, inscriptions, communication : le guide 2025 pour présidents de club.</p>
                  <div className="blog-card-meta"><span>Amaury Despretz</span><span>9 min</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{background:'white'}}>
          <div className="section-inner">
            <div style={{textAlign:'center',maxWidth:'480px',margin:'0 auto 32px'}}>
              <span className="section-tag">Zones couvertes</span>
              <h2 className="section-h2">AceStrike intervient <em>partout en France</em></h2>
            </div>
            <div className="geo-grid">
              <div className="geo-card" onClick={() => showArticle('paris')}><span className="geo-card-icon">📍</span><div><div className="geo-card-name">Paris & Île-de-France</div><div className="geo-card-count">800+ clubs</div></div></div>
              <div className="geo-card" onClick={() => showArticle('lyon')}><span className="geo-card-icon">📍</span><div><div className="geo-card-name">Lyon & AuRA</div><div className="geo-card-count">300+ clubs</div></div></div>
              <div className="geo-card" onClick={() => showArticle('bordeaux')}><span className="geo-card-icon">📍</span><div><div className="geo-card-name">Bordeaux & Nouvelle-Aquitaine</div><div className="geo-card-count">500+ clubs</div></div></div>
              <div className="geo-card"><span className="geo-card-icon">📍</span><div><div className="geo-card-name">Marseille & PACA</div><div className="geo-card-count">400+ clubs</div></div></div>
              <div className="geo-card"><span className="geo-card-icon">📍</span><div><div className="geo-card-name">Toulouse & Occitanie</div><div className="geo-card-count">350+ clubs</div></div></div>
              <div className="geo-card"><span className="geo-card-icon">📍</span><div><div className="geo-card-name">Nantes & Pays-de-la-Loire</div><div className="geo-card-count">280+ clubs</div></div></div>
            </div>
          </div>
        </section>
      </div>

      {/* PAGE: OFFRE */}
      <div className={`page ${activePage === 'offre' ? 'active' : ''}`} id="page-offre">
        <section className="article-hero">
          <div className="court-bg-dark"></div>
          <div className="article-hero-inner">
            <div className="article-eyebrow">Offre & Tarifs</div>
            <h1>La solution complète pour moderniser votre <em>club de tennis</em></h1>
            <p className="article-hero-intro">Site web sur-mesure, inscriptions automatisées, paiements sécurisés, espace sponsors et référencement local — tout ce que TenUp ne fait pas, réuni dans une seule solution.</p>
          </div>
        </section>
        <section className="section court-bg">
          <div className="section-inner">
            <div style={{textAlign:'center',maxWidth:'520px',margin:'0 auto 48px'}}>
              <h2 className="section-h2">Choisissez votre <em>formule</em></h2>
              <p className="section-intro mb-0">Toutes les formules incluent la maintenance, l&apos;hébergement et l&apos;optimisation SEO locale. Pas de surprise.</p>
            </div>
            <div className="offer-grid">
              <div className="offer-card reveal">
                <div className="offer-name">Essentiel</div>
                <div className="offer-price">Sur devis <span>/ an</span></div>
                <p className="offer-desc">Pour les clubs qui veulent une vitrine moderne sans fonctionnalités complexes.</p>
                <ul className="offer-features">
                  <li>Site vitrine 5 pages sur-mesure</li>
                  <li>Design mobile-first</li>
                  <li>SEO local de base</li>
                  <li>Formulaire de contact</li>
                  <li>Intégration Google Business</li>
                  <li>Hébergement inclus</li>
                </ul>
                <button className="offer-cta" onClick={() => showPage('contact')}>Obtenir un devis</button>
              </div>
              <div className="offer-card featured reveal">
                <div className="offer-badge">⭐ Le plus populaire</div>
                <div className="offer-name">Club Pro</div>
                <div className="offer-price">Sur devis <span>/ an</span></div>
                <p className="offer-desc">La solution complète pour automatiser la gestion et remplir vos stages.</p>
                <ul className="offer-features">
                  <li>Tout l&apos;Essentiel +</li>
                  <li>Portail inscriptions automatisé</li>
                  <li>Paiement sécurisé Stripe</li>
                  <li>Gestion certificats médicaux</li>
                  <li>Réservation courts (intégration TenUp)</li>
                  <li>Espace partenaires & sponsors</li>
                  <li>SEO local avancé + pages GEO</li>
                  <li>Dashboard analytics</li>
                </ul>
                <button className="offer-cta" onClick={() => showPage('contact')}>Réserver une démo →</button>
              </div>
              <div className="offer-card reveal">
                <div className="offer-name">Sur-mesure</div>
                <div className="offer-price">Devis <span>personnalisé</span></div>
                <p className="offer-desc">Pour les grands clubs ou fédérations avec des besoins spécifiques.</p>
                <ul className="offer-features">
                  <li>Tout le Club Pro +</li>
                  <li>Développements spécifiques</li>
                  <li>Intégrations API tierces</li>
                  <li>Multi-sites (fédération)</li>
                  <li>Formation de l&apos;équipe</li>
                  <li>Accompagnement continu</li>
                </ul>
                <button className="offer-cta" onClick={() => showPage('contact')}>Discutons-en</button>
              </div>
            </div>
            <div style={{textAlign:'center',marginTop:'40px'}}>
              <p style={{fontSize:'14px',color:'var(--muted)'}}>💡 En général, la vente de 2 &quot;Packs Digitaux&quot; à des sponsors locaux couvre intégralement le coût annuel de la solution.</p>
            </div>
          </div>
        </section>
        <section className="section" style={{background:'white'}}>
          <div className="section-inner">
            <div style={{textAlign:'center',marginBottom:'40px'}}>
              <h2 className="section-h2">ROI : ce que vous <em>gagnez réellement</em></h2>
            </div>
            <div className="stat-strip reveal">
              <div className="stat-strip-item"><span className="stat-strip-num">64h</span><span className="stat-strip-lbl">récupérées/an pour un club de 500 membres organisant 4 stages</span></div>
              <div className="stat-strip-item"><span className="stat-strip-num">−30%</span><span className="stat-strip-lbl">d&apos;impayés dès le premier mois avec paiement en ligne obligatoire</span></div>
              <div className="stat-strip-item"><span className="stat-strip-num">×3</span><span className="stat-strip-lbl">sponsors locaux convaincus grâce à l&apos;espace partenaires digital</span></div>
            </div>
          </div>
        </section>
        <section className="cta-section">
          <div className="court-bg-dark"></div>
          <div className="cta-section-inner">
            <h2>Votre club mérite une présence digitale <em>à la hauteur</em></h2>
            <p>15 minutes de démo, sans engagement. On vous montre ce qu&apos;AceStrike change concrètement pour un club comme le vôtre.</p>
            <button className="acid-cta" onClick={() => showPage('contact')}>Réserver une démo gratuite →</button>
          </div>
        </section>
      </div>

      {/* PAGE: FONCTIONNALITES */}
      <div className={`page ${activePage === 'fonctionnalites' ? 'active' : ''}`} id="page-fonctionnalites">
        <section className="article-hero">
          <div className="court-bg-dark"></div>
          <div className="article-hero-inner">
            <div className="article-eyebrow">Fonctionnalités</div>
            <h1>Tout ce dont votre club a besoin, <em>sans la complexité</em></h1>
            <p className="article-hero-intro">AceStrike est conçu exclusivement pour les clubs de tennis affiliés FFT. Chaque fonctionnalité répond à un vrai problème de terrain.</p>
          </div>
        </section>
        <section className="section court-bg">
          <div className="section-inner">
            <div className="features-grid">
              <div className="feature-card reveal">
                <div className="feature-icon">🌐</div>
                <h3>Portail d&apos;inscription en ligne</h3>
                <p>Formulaire intelligent avec téléversement de certificat médical, paiement Stripe et confirmation automatique. La place n&apos;est confirmée qu&apos;après paiement.</p>
              </div>
              <div className="feature-card reveal">
                <div className="feature-icon">📱</div>
                <h3>Hub membre mobile-first</h3>
                <p>Interface regroupant actus, tournois, tarifs, agenda et accès aux réservations. Point d&apos;entrée unique pour vos adhérents, même les moins digitaux.</p>
              </div>
              <div className="feature-card reveal">
                <div className="feature-icon">🤝</div>
                <h3>Espace partenaires valorisé</h3>
                <p>Encarts publicitaires dynamiques avec statistiques de vues et clics. Un argument de vente concret pour convaincre vos sponsors locaux.</p>
              </div>
              <div className="feature-card reveal">
                <div className="feature-icon">🔗</div>
                <h3>Intégration TenUp native</h3>
                <p>Bouton &quot;Réserver un court&quot; renvoyant vers TenUp. Vous gardez votre outil de gestion, AceStrike prend en charge tout le reste.</p>
              </div>
              <div className="feature-card reveal">
                <div className="feature-icon">🏔</div>
                <h3>État des courts en temps réel</h3>
                <p>Un interrupteur simple géré par le club. Les membres vérifient avant de se déplacer. Fini les 15 appels par jour de pluie.</p>
              </div>
              <div className="feature-card reveal">
                <div className="feature-icon">📊</div>
                <h3>Analytics & reporting</h3>
                <p>Taux de remplissage des stages, sources de trafic, conversion des inscriptions. Des données pour prendre de meilleures décisions.</p>
              </div>
              <div className="feature-card reveal">
                <div className="feature-icon">🔍</div>
                <h3>SEO local complet</h3>
                <p>Schema.org LocalBusiness + SportsClub, pages GEO par ville, contenu optimisé. Pour apparaître dans le &quot;pack local&quot; Google de votre secteur.</p>
              </div>
              <div className="feature-card reveal">
                <div className="feature-icon">⚖️</div>
                <h3>Conformité RGPD</h3>
                <p>Mentions légales, consentement explicite, stockage sécurisé des certificats médicaux. Tout est conforme sans effort de votre côté.</p>
              </div>
              <div className="feature-card reveal">
                <div className="feature-icon">🛡</div>
                <h3>Maintenance incluse</h3>
                <p>Mises à jour de sécurité, sauvegardes quotidiennes, monitoring. Vous ne gérez rien de technique — c&apos;est notre métier.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-section">
          <div className="court-bg-dark"></div>
          <div className="cta-section-inner">
            <h2>Toutes ces fonctionnalités, <em>en 15 minutes de démo</em></h2>
            <p>On vous montre concrètement ce que ça change pour un club comme le vôtre.</p>
            <button className="acid-cta" onClick={() => showPage('contact')}>Réserver une démo →</button>
          </div>
        </section>
      </div>

      {/* PAGE: BLOG */}
      <div className={`page ${activePage === 'blog' ? 'active' : ''}`} id="page-blog">
        <section className="article-hero">
          <div className="court-bg-dark"></div>
          <div className="article-hero-inner">
            <div className="article-eyebrow">Blog & Ressources</div>
            <h1>Guides pour <em>présidents de clubs</em> de tennis</h1>
            <p className="article-hero-intro">Gestion, numérique, SEO, automatisation — tout ce qu&apos;il faut savoir pour moderniser votre club de tennis en 2025.</p>
          </div>
        </section>
        <section className="section court-bg">
          <div className="section-inner">
            <div className="blog-grid">
              <div className="blog-card" onClick={() => showArticle('gestion-club')}>
                <div className="blog-card-thumb"><div className="blog-thumb-bg"></div><div className="blog-thumb-emoji">🎾</div><span className="blog-card-tag">Guide complet</span></div>
                <div className="blog-card-body"><h3>Gestion club de tennis : le guide complet 2025</h3><p>Tout ce qu&apos;il faut savoir sur la gestion moderne d&apos;un club de tennis.</p><div className="blog-card-meta"><span>9 min</span><span>Sep 2025</span></div></div>
              </div>
              <div className="blog-card" onClick={() => showArticle('site-web')}>
                <div className="blog-card-thumb"><div className="blog-thumb-bg"></div><div className="blog-thumb-emoji">💻</div><span className="blog-card-tag">Création & Refonte</span></div>
                <div className="blog-card-body"><h3>Site web club de tennis : pourquoi et comment</h3><p>Créer un site moderne qui recrute des adhérents et attire des sponsors.</p><div className="blog-card-meta"><span>8 min</span><span>Sep 2025</span></div></div>
              </div>
              <div className="blog-card" onClick={() => showArticle('alternative-tenup')}>
                <div className="blog-card-thumb"><div className="blog-thumb-bg"></div><div className="blog-thumb-emoji">⚡</div><span className="blog-card-tag">Comparatif</span></div>
                <div className="blog-card-body"><h3>Alternative à TenUp pour club de tennis</h3><p>Le comparatif complet 2025 pour choisir la meilleure solution.</p><div className="blog-card-meta"><span>7 min</span><span>Sep 2025</span></div></div>
              </div>
              <div className="blog-card" onClick={() => showArticle('reservation')}>
                <div className="blog-card-thumb"><div className="blog-thumb-bg"></div><div className="blog-thumb-emoji">📅</div><span className="blog-card-tag">Réservation</span></div>
                <div className="blog-card-body"><h3>Réservation de courts en ligne : guide pour votre club</h3><p>Comment digitaliser les réservations et réduire les appels entrants.</p><div className="blog-card-meta"><span>7 min</span><span>Sep 2025</span></div></div>
              </div>
              <div className="blog-card" onClick={() => showArticle('inscription')}>
                <div className="blog-card-thumb"><div className="blog-thumb-bg"></div><div className="blog-thumb-emoji">📝</div><span className="blog-card-tag">Automatisation</span></div>
                <div className="blog-card-body"><h3>Inscriptions aux stages de tennis sans effort</h3><p>Formulaire, paiement, certificats : le parcours d&apos;inscription idéal.</p><div className="blog-card-meta"><span>8 min</span><span>Sep 2025</span></div></div>
              </div>
              <div className="blog-card" onClick={() => showArticle('automatisation')}>
                <div className="blog-card-thumb"><div className="blog-thumb-bg"></div><div className="blog-thumb-emoji">⚙️</div><span className="blog-card-tag">Productivité</span></div>
                <div className="blog-card-body"><h3>Automatiser la gestion de votre club de tennis</h3><p>Par où commencer et quel ROI attendre concrètement.</p><div className="blog-card-meta"><span>7 min</span><span>Sep 2025</span></div></div>
              </div>
              <div className="blog-card" onClick={() => showArticle('paiement')}>
                <div className="blog-card-thumb"><div className="blog-thumb-bg"></div><div className="blog-thumb-emoji">💳</div><span className="blog-card-tag">Finance</span></div>
                <div className="blog-card-body"><h3>Paiement en ligne pour club de tennis</h3><p>Stripe, conformité, réduction des impayés : tout ce qu&apos;il faut savoir.</p><div className="blog-card-meta"><span>7 min</span><span>Sep 2025</span></div></div>
              </div>
              <div className="blog-card" onClick={() => showArticle('trouver')}>
                <div className="blog-card-thumb"><div className="blog-thumb-bg"></div><div className="blog-thumb-emoji">🗺</div><span className="blog-card-tag">Guide joueurs</span></div>
                <div className="blog-card-body"><h3>Trouver un court de tennis près de chez soi</h3><p>Clubs FFT, courts municipaux, applications : toutes les options 2025.</p><div className="blog-card-meta"><span>6 min</span><span>Sep 2025</span></div></div>
              </div>
            </div>
            <div style={{marginTop:'40px'}}>
              <h3 className="section-h2" style={{fontSize:'1.4rem',marginBottom:'20px'}}>Pages <em>régionales</em></h3>
              <div className="geo-grid">
                <div className="geo-card" onClick={() => showArticle('paris')}><span className="geo-card-icon">📍</span><div><div className="geo-card-name">Paris & Île-de-France</div></div></div>
                <div className="geo-card" onClick={() => showArticle('lyon')}><span className="geo-card-icon">📍</span><div><div className="geo-card-name">Lyon & AuRA</div></div></div>
                <div className="geo-card" onClick={() => showArticle('bordeaux')}><span className="geo-card-icon">📍</span><div><div className="geo-card-name">Bordeaux & Nouvelle-Aquitaine</div></div></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* PAGE: CONTACT */}
      <div className={`page ${activePage === 'contact' ? 'active' : ''}`} id="page-contact">
        <section className="article-hero">
          <div className="court-bg-dark"></div>
          <div className="article-hero-inner">
            <div className="article-eyebrow">Démo gratuite</div>
            <h1>15 minutes pour changer la <em>gestion de votre club</em></h1>
            <p className="article-hero-intro">Sans engagement. On vous montre concrètement ce qu&apos;AceStrike change pour un club comme le vôtre — inscriptions, site, paiements, sponsors.</p>
          </div>
        </section>
        <section className="section court-bg">
          <div className="section-inner" style={{maxWidth:'700px'}}>
            <div className="contact-form" style={{maxWidth:'100%',background:'white',border:'1px solid var(--border)',borderRadius:'var(--r-xl)',padding:'40px'}}>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'1.5rem',color:'var(--ink)',marginBottom:'8px'}}>Réserver une démo</h2>
              <p style={{fontSize:'14px',color:'var(--muted)',marginBottom:'28px'}}>Réponse sous 24h. Visio ou téléphone selon votre préférence.</p>
              
              {!formSubmitted ? (
                <div id="contactForm">
                  <div className="form-group">
                    <label className="form-label" style={{color:'var(--muted)'}}>Votre prénom *</label>
                    <input type="text" className="form-input" style={{background:'var(--cream)',borderColor:'var(--border)',color:'var(--ink)'}} placeholder="Brice" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" style={{color:'var(--muted)'}}>Nom du club *</label>
                    <input type="text" className="form-input" style={{background:'var(--cream)',borderColor:'var(--border)',color:'var(--ink)'}} placeholder="Tennis Club de..." />
                  </div>
                  <div className="form-group">
                    <label className="form-label" style={{color:'var(--muted)'}}>Email professionnel *</label>
                    <input type="email" className="form-input" style={{background:'var(--cream)',borderColor:'var(--border)',color:'var(--ink)'}} placeholder="president@votreclub.fr" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" style={{color:'var(--muted)'}}>Nombre d&apos;adhérents</label>
                    <select className="form-select" style={{background:'var(--cream)',borderColor:'var(--border)',color:'var(--ink)'}} defaultValue="600 – 1 000">
                      <option>Moins de 300</option>
                      <option>300 – 600</option>
                      <option>600 – 1 000</option>
                      <option>Plus de 1 000</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" style={{color:'var(--muted)'}}>Votre besoin principal</label>
                    <select className="form-select" style={{background:'var(--cream)',borderColor:'var(--border)',color:'var(--ink)'}} defaultValue="Refonte du site web">
                      <option>Refonte du site web</option>
                      <option>Inscriptions stages en ligne</option>
                      <option>Paiement en ligne</option>
                      <option>SEO / visibilité locale</option>
                      <option>Solution complète</option>
                    </select>
                  </div>
                  <button className="form-submit" style={{background:'var(--ink)',color:'white'}} onClick={submitForm}>Envoyer la demande →</button>
                </div>
              ) : (
                <div id="formSuccess" style={{textAlign:'center',padding:'32px'}}>
                  <div style={{fontSize:'48px',marginBottom:'16px'}}>✅</div>
                  <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:'1.4rem',color:'var(--ink)',marginBottom:'8px'}}>Demande reçue !</h3>
                  <p style={{color:'var(--muted)',fontSize:'15px'}}>Amaury vous contactera dans les 24h pour fixer le créneau de démo. À très vite !</p>
                </div>
              )}
            </div>
            <div style={{marginTop:'32px',padding:'24px',background:'var(--pale)',borderRadius:'var(--r-lg)'}}>
              <h3 style={{fontSize:'15px',fontWeight:500,color:'var(--ink)',marginBottom:'12px'}}>Ce que vous verrez pendant la démo</h3>
              <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'8px'}}>
                <li style={{fontSize:'14px',color:'#333',display:'flex',gap:'8px'}}><span style={{color:'var(--ink-lite)'}}>→</span>Un aperçu de votre futur site vitrine</li>
                <li style={{fontSize:'14px',color:'#333',display:'flex',gap:'8px'}}><span style={{color:'var(--ink-lite)'}}>→</span>Le parcours d&apos;inscription en ligne complet</li>
                <li style={{fontSize:'14px',color:'#333',display:'flex',gap:'8px'}}><span style={{color:'var(--ink-lite)'}}>→</span>L&apos;espace partenaires et les statistiques</li>
                <li style={{fontSize:'14px',color:'#333',display:'flex',gap:'8px'}}><span style={{color:'var(--ink-lite)'}}>→</span>Les questions spécifiques à votre club</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* PAGE: ARTICLE */}
      {activePage === 'article' && renderArticle()}

      {/* FOOTER */}
      <footer id="mainFooter">
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <div className="footer-brand-name">AceStrike</div>
              <p className="footer-brand-desc">La solution numérique sur-mesure pour les clubs de tennis affiliés FFT. Complémentaire à TenUp.</p>
              <div className="footer-slogan">« Moins d&apos;administratif, plus de jeu. Set et Match. »</div>
            </div>
            <div className="footer-col">
              <h4>Navigation</h4>
              <button onClick={() => showPage('home')}>Accueil</button>
              <button onClick={() => showPage('offre')}>Offre</button>
              <button onClick={() => showPage('fonctionnalites')}>Fonctionnalités</button>
              <button onClick={() => showPage('contact')}>Démo gratuite</button>
            </div>
            <div className="footer-col">
              <h4>Blog</h4>
              <button onClick={() => showArticle('gestion-club')}>Gestion de club</button>
              <button onClick={() => showArticle('site-web')}>Site web</button>
              <button onClick={() => showArticle('alternative-tenup')}>Alternative TenUp</button>
              <button onClick={() => showArticle('inscription')}>Inscriptions stages</button>
              <button onClick={() => showArticle('paiement')}>Paiement en ligne</button>
            </div>
            <div className="footer-col">
              <h4>Régions</h4>
              <button onClick={() => showArticle('paris')}>Paris & Île-de-France</button>
              <button onClick={() => showArticle('lyon')}>Lyon & AuRA</button>
              <button onClick={() => showArticle('bordeaux')}>Bordeaux & Nouvelle-Aq.</button>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copy">© 2025 AceStrike — Amaury Despretz. Tous droits réservés.</div>
            <div className="footer-made">Fait avec <em>🎾</em> pour les clubs de tennis français</div>
          </div>
        </div>
      </footer>
    </>
  );
}
