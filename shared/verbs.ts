import type { Verb } from "./schema";

export const frenchVerbs: Verb[] = [
  {
    id: 1,
    infinitive: "être",
    translation: "ser/estar",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "été",
    conjugations: {
      présent: { je: "suis", tu: "es", "il/elle": "est", nous: "sommes", vous: "êtes", "ils/elles": "sont" },
      "passé composé": { je: "ai été", tu: "as été", "il/elle": "a été", nous: "avons été", vous: "avez été", "ils/elles": "ont été" },
      imparfait: { je: "étais", tu: "étais", "il/elle": "était", nous: "étions", vous: "étiez", "ils/elles": "étaient" },
      "plus-que-parfait": { je: "avais été", tu: "avais été", "il/elle": "avait été", nous: "avions été", vous: "aviez été", "ils/elles": "avaient été" }
    }
  },
  {
    id: 2,
    infinitive: "avoir",
    translation: "tener/haber",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "eu",
    conjugations: {
      présent: { je: "ai", tu: "as", "il/elle": "a", nous: "avons", vous: "avez", "ils/elles": "ont" },
      "passé composé": { je: "ai eu", tu: "as eu", "il/elle": "a eu", nous: "avons eu", vous: "avez eu", "ils/elles": "ont eu" },
      imparfait: { je: "avais", tu: "avais", "il/elle": "avait", nous: "avions", vous: "aviez", "ils/elles": "avaient" },
      "plus-que-parfait": { je: "avais eu", tu: "avais eu", "il/elle": "avait eu", nous: "avions eu", vous: "aviez eu", "ils/elles": "avaient eu" }
    }
  },
  {
    id: 3,
    infinitive: "faire",
    translation: "hacer",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "fait",
    conjugations: {
      présent: { je: "fais", tu: "fais", "il/elle": "fait", nous: "faisons", vous: "faites", "ils/elles": "font" },
      "passé composé": { je: "ai fait", tu: "as fait", "il/elle": "a fait", nous: "avons fait", vous: "avez fait", "ils/elles": "ont fait" },
      imparfait: { je: "faisais", tu: "faisais", "il/elle": "faisait", nous: "faisions", vous: "faisiez", "ils/elles": "faisaient" },
      "plus-que-parfait": { je: "avais fait", tu: "avais fait", "il/elle": "avait fait", nous: "avions fait", vous: "aviez fait", "ils/elles": "avaient fait" }
    }
  },
  {
    id: 4,
    infinitive: "aller",
    translation: "ir",
    type: "irregular",
    group: 3,
    auxiliaire: "être",
    participe: "allé",
    conjugations: {
      présent: { je: "vais", tu: "vas", "il/elle": "va", nous: "allons", vous: "allez", "ils/elles": "vont" },
      "passé composé": { je: "suis allé(e)", tu: "es allé(e)", "il/elle": "est allé(e)", nous: "sommes allé(e)s", vous: "êtes allé(e)(s)", "ils/elles": "sont allé(e)s" },
      imparfait: { je: "allais", tu: "allais", "il/elle": "allait", nous: "allions", vous: "alliez", "ils/elles": "allaient" },
      "plus-que-parfait": { je: "étais allé(e)", tu: "étais allé(e)", "il/elle": "était allé(e)", nous: "étions allé(e)s", vous: "étiez allé(e)(s)", "ils/elles": "étaient allé(e)s" }
    }
  },
  {
    id: 5,
    infinitive: "pouvoir",
    translation: "poder",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "pu",
    conjugations: {
      présent: { je: "peux", tu: "peux", "il/elle": "peut", nous: "pouvons", vous: "pouvez", "ils/elles": "peuvent" },
      "passé composé": { je: "ai pu", tu: "as pu", "il/elle": "a pu", nous: "avons pu", vous: "avez pu", "ils/elles": "ont pu" },
      imparfait: { je: "pouvais", tu: "pouvais", "il/elle": "pouvait", nous: "pouvions", vous: "pouviez", "ils/elles": "pouvaient" },
      "plus-que-parfait": { je: "avais pu", tu: "avais pu", "il/elle": "avait pu", nous: "avions pu", vous: "aviez pu", "ils/elles": "avaient pu" }
    }
  },
  {
    id: 6,
    infinitive: "vouloir",
    translation: "querer",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "voulu",
    conjugations: {
      présent: { je: "veux", tu: "veux", "il/elle": "veut", nous: "voulons", vous: "voulez", "ils/elles": "veulent" },
      "passé composé": { je: "ai voulu", tu: "as voulu", "il/elle": "a voulu", nous: "avons voulu", vous: "avez voulu", "ils/elles": "ont voulu" },
      imparfait: { je: "voulais", tu: "voulais", "il/elle": "voulait", nous: "voulions", vous: "vouliez", "ils/elles": "voulaient" },
      "plus-que-parfait": { je: "avais voulu", tu: "avais voulu", "il/elle": "avait voulu", nous: "avions voulu", vous: "aviez voulu", "ils/elles": "avaient voulu" }
    }
  },
  {
    id: 7,
    infinitive: "devoir",
    translation: "deber",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "dû",
    conjugations: {
      présent: { je: "dois", tu: "dois", "il/elle": "doit", nous: "devons", vous: "devez", "ils/elles": "doivent" },
      "passé composé": { je: "ai dû", tu: "as dû", "il/elle": "a dû", nous: "avons dû", vous: "avez dû", "ils/elles": "ont dû" },
      imparfait: { je: "devais", tu: "devais", "il/elle": "devait", nous: "devions", vous: "deviez", "ils/elles": "devaient" },
      "plus-que-parfait": { je: "avais dû", tu: "avais dû", "il/elle": "avait dû", nous: "avions dû", vous: "aviez dû", "ils/elles": "avaient dû" }
    }
  },
  {
    id: 8,
    infinitive: "savoir",
    translation: "saber",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "su",
    conjugations: {
      présent: { je: "sais", tu: "sais", "il/elle": "sait", nous: "savons", vous: "savez", "ils/elles": "savent" },
      "passé composé": { je: "ai su", tu: "as su", "il/elle": "a su", nous: "avons su", vous: "avez su", "ils/elles": "ont su" },
      imparfait: { je: "savais", tu: "savais", "il/elle": "savait", nous: "savions", vous: "saviez", "ils/elles": "savaient" },
      "plus-que-parfait": { je: "avais su", tu: "avais su", "il/elle": "avait su", nous: "avions su", vous: "aviez su", "ils/elles": "avaient su" }
    }
  },
  {
    id: 9,
    infinitive: "venir",
    translation: "venir",
    type: "irregular",
    group: 3,
    auxiliaire: "être",
    participe: "venu",
    conjugations: {
      présent: { je: "viens", tu: "viens", "il/elle": "vient", nous: "venons", vous: "venez", "ils/elles": "viennent" },
      "passé composé": { je: "suis venu(e)", tu: "es venu(e)", "il/elle": "est venu(e)", nous: "sommes venu(e)s", vous: "êtes venu(e)(s)", "ils/elles": "sont venu(e)s" },
      imparfait: { je: "venais", tu: "venais", "il/elle": "venait", nous: "venions", vous: "veniez", "ils/elles": "venaient" },
      "plus-que-parfait": { je: "étais venu(e)", tu: "étais venu(e)", "il/elle": "était venu(e)", nous: "étions venu(e)s", vous: "étiez venu(e)(s)", "ils/elles": "étaient venu(e)s" }
    }
  },
  {
    id: 10,
    infinitive: "voir",
    translation: "ver",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "vu",
    conjugations: {
      présent: { je: "vois", tu: "vois", "il/elle": "voit", nous: "voyons", vous: "voyez", "ils/elles": "voient" },
      "passé composé": { je: "ai vu", tu: "as vu", "il/elle": "a vu", nous: "avons vu", vous: "avez vu", "ils/elles": "ont vu" },
      imparfait: { je: "voyais", tu: "voyais", "il/elle": "voyait", nous: "voyions", vous: "voyiez", "ils/elles": "voyaient" },
      "plus-que-parfait": { je: "avais vu", tu: "avais vu", "il/elle": "avait vu", nous: "avions vu", vous: "aviez vu", "ils/elles": "avaient vu" }
    }
  },
  {
    id: 11,
    infinitive: "dire",
    translation: "decir",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "dit",
    conjugations: {
      présent: { je: "dis", tu: "dis", "il/elle": "dit", nous: "disons", vous: "dites", "ils/elles": "disent" },
      "passé composé": { je: "ai dit", tu: "as dit", "il/elle": "a dit", nous: "avons dit", vous: "avez dit", "ils/elles": "ont dit" },
      imparfait: { je: "disais", tu: "disais", "il/elle": "disait", nous: "disions", vous: "disiez", "ils/elles": "disaient" },
      "plus-que-parfait": { je: "avais dit", tu: "avais dit", "il/elle": "avait dit", nous: "avions dit", vous: "aviez dit", "ils/elles": "avaient dit" }
    }
  },
  {
    id: 12,
    infinitive: "prendre",
    translation: "tomar/coger",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "pris",
    conjugations: {
      présent: { je: "prends", tu: "prends", "il/elle": "prend", nous: "prenons", vous: "prenez", "ils/elles": "prennent" },
      "passé composé": { je: "ai pris", tu: "as pris", "il/elle": "a pris", nous: "avons pris", vous: "avez pris", "ils/elles": "ont pris" },
      imparfait: { je: "prenais", tu: "prenais", "il/elle": "prenait", nous: "prenions", vous: "preniez", "ils/elles": "prenaient" },
      "plus-que-parfait": { je: "avais pris", tu: "avais pris", "il/elle": "avait pris", nous: "avions pris", vous: "aviez pris", "ils/elles": "avaient pris" }
    }
  },
  {
    id: 13,
    infinitive: "donner",
    translation: "dar",
    type: "regular",
    group: 1,
    auxiliaire: "avoir",
    participe: "donné",
    conjugations: {
      présent: { je: "donne", tu: "donnes", "il/elle": "donne", nous: "donnons", vous: "donnez", "ils/elles": "donnent" },
      "passé composé": { je: "ai donné", tu: "as donné", "il/elle": "a donné", nous: "avons donné", vous: "avez donné", "ils/elles": "ont donné" },
      imparfait: { je: "donnais", tu: "donnais", "il/elle": "donnait", nous: "donnions", vous: "donniez", "ils/elles": "donnaient" },
      "plus-que-parfait": { je: "avais donné", tu: "avais donné", "il/elle": "avait donné", nous: "avions donné", vous: "aviez donné", "ils/elles": "avaient donné" }
    }
  },
  {
    id: 14,
    infinitive: "parler",
    translation: "hablar",
    type: "regular",
    group: 1,
    auxiliaire: "avoir",
    participe: "parlé",
    conjugations: {
      présent: { je: "parle", tu: "parles", "il/elle": "parle", nous: "parlons", vous: "parlez", "ils/elles": "parlent" },
      "passé composé": { je: "ai parlé", tu: "as parlé", "il/elle": "a parlé", nous: "avons parlé", vous: "avez parlé", "ils/elles": "ont parlé" },
      imparfait: { je: "parlais", tu: "parlais", "il/elle": "parlait", nous: "parlions", vous: "parliez", "ils/elles": "parlaient" },
      "plus-que-parfait": { je: "avais parlé", tu: "avais parlé", "il/elle": "avait parlé", nous: "avions parlé", vous: "aviez parlé", "ils/elles": "avaient parlé" }
    }
  },
  {
    id: 15,
    infinitive: "aimer",
    translation: "amar/gustar",
    type: "regular",
    group: 1,
    auxiliaire: "avoir",
    participe: "aimé",
    conjugations: {
      présent: { je: "aime", tu: "aimes", "il/elle": "aime", nous: "aimons", vous: "aimez", "ils/elles": "aiment" },
      "passé composé": { je: "ai aimé", tu: "as aimé", "il/elle": "a aimé", nous: "avons aimé", vous: "avez aimé", "ils/elles": "ont aimé" },
      imparfait: { je: "aimais", tu: "aimais", "il/elle": "aimait", nous: "aimions", vous: "aimiez", "ils/elles": "aimaient" },
      "plus-que-parfait": { je: "avais aimé", tu: "avais aimé", "il/elle": "avait aimé", nous: "avions aimé", vous: "aviez aimé", "ils/elles": "avaient aimé" }
    }
  },
  {
    id: 16,
    infinitive: "manger",
    translation: "comer",
    type: "regular",
    group: 1,
    auxiliaire: "avoir",
    participe: "mangé",
    conjugations: {
      présent: { je: "mange", tu: "manges", "il/elle": "mange", nous: "mangeons", vous: "mangez", "ils/elles": "mangent" },
      "passé composé": { je: "ai mangé", tu: "as mangé", "il/elle": "a mangé", nous: "avons mangé", vous: "avez mangé", "ils/elles": "ont mangé" },
      imparfait: { je: "mangeais", tu: "mangeais", "il/elle": "mangeait", nous: "mangions", vous: "mangiez", "ils/elles": "mangeaient" },
      "plus-que-parfait": { je: "avais mangé", tu: "avais mangé", "il/elle": "avait mangé", nous: "avions mangé", vous: "aviez mangé", "ils/elles": "avaient mangé" },
    }
  },
  {
    id: 17,
    infinitive: "boire",
    translation: "beber",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "bu",
    conjugations: {
      présent: { je: "bois", tu: "bois", "il/elle": "boit", nous: "buvons", vous: "buvez", "ils/elles": "boivent" },
      "passé composé": { je: "ai bu", tu: "as bu", "il/elle": "a bu", nous: "avons bu", vous: "avez bu", "ils/elles": "ont bu" },
      imparfait: { je: "buvais", tu: "buvais", "il/elle": "buvait", nous: "buvions", vous: "buviez", "ils/elles": "buvaient" },
      "plus-que-parfait": { je: "avais bu", tu: "avais bu", "il/elle": "avait bu", nous: "avions bu", vous: "aviez bu", "ils/elles": "avaient bu" },
    }
  },
  {
    id: 18,
    infinitive: "dormir",
    translation: "dormir",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "dormi",
    conjugations: {
      présent: { je: "dors", tu: "dors", "il/elle": "dort", nous: "dormons", vous: "dormez", "ils/elles": "dorment" },
      "passé composé": { je: "ai dormi", tu: "as dormi", "il/elle": "a dormi", nous: "avons dormi", vous: "avez dormi", "ils/elles": "ont dormi" },
      imparfait: { je: "dormais", tu: "dormais", "il/elle": "dormait", nous: "dormions", vous: "dormiez", "ils/elles": "dormaient" },
      "plus-que-parfait": { je: "avais dormi", tu: "avais dormi", "il/elle": "avait dormi", nous: "avions dormi", vous: "aviez dormi", "ils/elles": "avaient dormi" },
    }
  },
  {
    id: 19,
    infinitive: "écrire",
    translation: "escribir",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "écrit",
    conjugations: {
      présent: { je: "écris", tu: "écris", "il/elle": "écrit", nous: "écrivons", vous: "écrivez", "ils/elles": "écrivent" },
      "passé composé": { je: "ai écrit", tu: "as écrit", "il/elle": "a écrit", nous: "avons écrit", vous: "avez écrit", "ils/elles": "ont écrit" },
      imparfait: { je: "écrivais", tu: "écrivais", "il/elle": "écrivait", nous: "écrivions", vous: "écriviez", "ils/elles": "écrivaient" },
      "plus-que-parfait": { je: "avais écrit", tu: "avais écrit", "il/elle": "avait écrit", nous: "avions écrit", vous: "aviez écrit", "ils/elles": "avaient écrit" },
    }
  },
  {
    id: 20,
    infinitive: "lire",
    translation: "leer",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "lu",
    conjugations: {
      présent: { je: "lis", tu: "lis", "il/elle": "lit", nous: "lisons", vous: "lisez", "ils/elles": "lisent" },
      "passé composé": { je: "ai lu", tu: "as lu", "il/elle": "a lu", nous: "avons lu", vous: "avez lu", "ils/elles": "ont lu" },
      imparfait: { je: "lisais", tu: "lisais", "il/elle": "lisait", nous: "lisions", vous: "lisiez", "ils/elles": "lisaient" },
      "plus-que-parfait": { je: "avais lu", tu: "avais lu", "il/elle": "avait lu", nous: "avions lu", vous: "aviez lu", "ils/elles": "avaient lu" },
    }
  },
  {
    id: 21,
    infinitive: "mettre",
    translation: "poner",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "mis",
    conjugations: {
      présent: { je: "mets", tu: "mets", "il/elle": "met", nous: "mettons", vous: "mettez", "ils/elles": "mettent" },
      "passé composé": { je: "ai mis", tu: "as mis", "il/elle": "a mis", nous: "avons mis", vous: "avez mis", "ils/elles": "ont mis" },
      imparfait: { je: "mettais", tu: "mettais", "il/elle": "mettait", nous: "mettions", vous: "mettiez", "ils/elles": "mettaient" },
      "plus-que-parfait": { je: "avais mis", tu: "avais mis", "il/elle": "avait mis", nous: "avions mis", vous: "aviez mis", "ils/elles": "avaient mis" }
    }
  },
  {
    id: 22,
    infinitive: "partir",
    translation: "partir/irse",
    type: "irregular",
    group: 3,
    auxiliaire: "être",
    participe: "parti",
    conjugations: {
      présent: { je: "pars", tu: "pars", "il/elle": "part", nous: "partons", vous: "partez", "ils/elles": "partent" },
      "passé composé": { je: "suis parti(e)", tu: "es parti(e)", "il/elle": "est parti(e)", nous: "sommes parti(e)s", vous: "êtes parti(e)(s)", "ils/elles": "sont parti(e)s" },
      imparfait: { je: "partais", tu: "partais", "il/elle": "partait", nous: "partions", vous: "partiez", "ils/elles": "partaient" },
      "plus-que-parfait": { je: "étais parti(e)", tu: "étais parti(e)", "il/elle": "était parti(e)", nous: "étions parti(e)s", vous: "étiez parti(e)(s)", "ils/elles": "étaient parti(e)s" },
    }
  },
  {
    id: 23,
    infinitive: "sortir",
    translation: "salir",
    type: "irregular",
    group: 3,
    auxiliaire: "être",
    participe: "sorti",
    conjugations: {
      présent: { je: "sors", tu: "sors", "il/elle": "sort", nous: "sortons", vous: "sortez", "ils/elles": "sortent" },
      "passé composé": { je: "suis sorti(e)", tu: "es sorti(e)", "il/elle": "est sorti(e)", nous: "sommes sorti(e)s", vous: "êtes sorti(e)(s)", "ils/elles": "sont sorti(e)s" },
      imparfait: { je: "sortais", tu: "sortais", "il/elle": "sortait", nous: "sortions", vous: "sortiez", "ils/elles": "sortaient" },
      "plus-que-parfait": { je: "étais sorti(e)", tu: "étais sorti(e)", "il/elle": "était sorti(e)", nous: "étions sorti(e)s", vous: "étiez sorti(e)(s)", "ils/elles": "étaient sorti(e)s" },
    }
  },
  {
    id: 24,
    infinitive: "entrer",
    translation: "entrar",
    type: "regular",
    group: 1,
    auxiliaire: "être",
    participe: "entré",
    conjugations: {
      présent: { je: "entre", tu: "entres", "il/elle": "entre", nous: "entrons", vous: "entrez", "ils/elles": "entrent" },
      "passé composé": { je: "suis entré(e)", tu: "es entré(e)", "il/elle": "est entré(e)", nous: "sommes entré(e)s", vous: "êtes entré(e)(s)", "ils/elles": "sont entré(e)s" },
      imparfait: { je: "entrais", tu: "entrais", "il/elle": "entrait", nous: "entrions", vous: "entriez", "ils/elles": "entraient" },
      "plus-que-parfait": { je: "étais entré(e)", tu: "étais entré(e)", "il/elle": "était entré(e)", nous: "étions entré(e)s", vous: "étiez entré(e)(s)", "ils/elles": "étaient entré(e)s" },
    }
  },
  {
    id: 25,
    infinitive: "rester",
    translation: "quedarse",
    type: "regular",
    group: 1,
    auxiliaire: "être",
    participe: "resté",
    conjugations: {
      présent: { je: "reste", tu: "restes", "il/elle": "reste", nous: "restons", vous: "restez", "ils/elles": "restent" },
      "passé composé": { je: "suis resté(e)", tu: "es resté(e)", "il/elle": "est resté(e)", nous: "sommes resté(e)s", vous: "êtes resté(e)(s)", "ils/elles": "sont resté(e)s" },
      imparfait: { je: "restais", tu: "restais", "il/elle": "restait", nous: "restions", vous: "restiez", "ils/elles": "restaient" },
      "plus-que-parfait": { je: "étais resté(e)", tu: "étais resté(e)", "il/elle": "était resté(e)", nous: "étions resté(e)s", vous: "étiez resté(e)(s)", "ils/elles": "étaient resté(e)s" },
    }
  },
  {
    id: 26,
    infinitive: "tomber",
    translation: "caer",
    type: "regular",
    group: 1,
    auxiliaire: "être",
    participe: "tombé",
    conjugations: {
      présent: { je: "tombe", tu: "tombes", "il/elle": "tombe", nous: "tombons", vous: "tombez", "ils/elles": "tombent" },
      "passé composé": { je: "suis tombé(e)", tu: "es tombé(e)", "il/elle": "est tombé(e)", nous: "sommes tombé(e)s", vous: "êtes tombé(e)(s)", "ils/elles": "sont tombé(e)s" },
      imparfait: { je: "tombais", tu: "tombais", "il/elle": "tombait", nous: "tombions", vous: "tombiez", "ils/elles": "tombaient" },
      "plus-que-parfait": { je: "étais tombé(e)", tu: "étais tombé(e)", "il/elle": "était tombé(e)", nous: "étions tombé(e)s", vous: "étiez tombé(e)(s)", "ils/elles": "étaient tombé(e)s" },
    }
  },
  {
    id: 27,
    infinitive: "arriver",
    translation: "llegar",
    type: "regular",
    group: 1,
    auxiliaire: "être",
    participe: "arrivé",
    conjugations: {
      présent: { je: "arrive", tu: "arrives", "il/elle": "arrive", nous: "arrivons", vous: "arrivez", "ils/elles": "arrivent" },
      "passé composé": { je: "suis arrivé(e)", tu: "es arrivé(e)", "il/elle": "est arrivé(e)", nous: "sommes arrivé(e)s", vous: "êtes arrivé(e)(s)", "ils/elles": "sont arrivé(e)s" },
      imparfait: { je: "arrivais", tu: "arrivais", "il/elle": "arrivait", nous: "arrivions", vous: "arriviez", "ils/elles": "arrivaient" },
      "plus-que-parfait": { je: "étais arrivé(e)", tu: "étais arrivé(e)", "il/elle": "était arrivé(e)", nous: "étions arrivé(e)s", vous: "étiez arrivé(e)(s)", "ils/elles": "étaient arrivé(e)s" }
    }
  },
  {
    id: 28,
    infinitive: "monter",
    translation: "subir",
    type: "regular",
    group: 1,
    auxiliaire: "être",
    participe: "monté",
    conjugations: {
      présent: { je: "monte", tu: "montes", "il/elle": "monte", nous: "montons", vous: "montez", "ils/elles": "montent" },
      "passé composé": { je: "suis monté(e)", tu: "es monté(e)", "il/elle": "est monté(e)", nous: "sommes monté(e)s", vous: "êtes monté(e)(s)", "ils/elles": "sont monté(e)s" },
      imparfait: { je: "montais", tu: "montais", "il/elle": "montait", nous: "montions", vous: "montiez", "ils/elles": "montaient" },
      "plus-que-parfait": { je: "étais monté(e)", tu: "étais monté(e)", "il/elle": "était monté(e)", nous: "étions monté(e)s", vous: "étiez monté(e)(s)", "ils/elles": "étaient monté(e)s" },
    }
  },
  {
    id: 29,
    infinitive: "descendre",
    translation: "bajar",
    type: "regular",
    group: 3,
    auxiliaire: "être",
    participe: "descendu",
    conjugations: {
      présent: { je: "descends", tu: "descends", "il/elle": "descend", nous: "descendons", vous: "descendez", "ils/elles": "descendent" },
      "passé composé": { je: "suis descendu(e)", tu: "es descendu(e)", "il/elle": "est descendu(e)", nous: "sommes descendu(e)s", vous: "êtes descendu(e)(s)", "ils/elles": "sont descendu(e)s" },
      imparfait: { je: "descendais", tu: "descendais", "il/elle": "descendait", nous: "descendions", vous: "descendiez", "ils/elles": "descendaient" },
      "plus-que-parfait": { je: "étais descendu(e)", tu: "étais descendu(e)", "il/elle": "était descendu(e)", nous: "étions descendu(e)s", vous: "étiez descendu(e)(s)", "ils/elles": "étaient descendu(e)s" },
    }
  },
  {
    id: 30,
    infinitive: "naître",
    translation: "nacer",
    type: "irregular",
    group: 3,
    auxiliaire: "être",
    participe: "né",
    conjugations: {
      présent: { je: "nais", tu: "nais", "il/elle": "naît", nous: "naissons", vous: "naissez", "ils/elles": "naissent" },
      "passé composé": { je: "suis né(e)", tu: "es né(e)", "il/elle": "est né(e)", nous: "sommes né(e)s", vous: "êtes né(e)(s)", "ils/elles": "sont né(e)s" },
      imparfait: { je: "naissais", tu: "naissais", "il/elle": "naissait", nous: "naissions", vous: "naissiez", "ils/elles": "naissaient" },
      "plus-que-parfait": { je: "étais né(e)", tu: "étais né(e)", "il/elle": "était né(e)", nous: "étions né(e)s", vous: "étiez né(e)(s)", "ils/elles": "étaient né(e)s" },
    }
  },
  {
    id: 31,
    infinitive: "mourir",
    translation: "morir",
    type: "irregular",
    group: 3,
    auxiliaire: "être",
    participe: "mort",
    conjugations: {
      présent: { je: "meurs", tu: "meurs", "il/elle": "meurt", nous: "mourons", vous: "mourez", "ils/elles": "meurent" },
      "passé composé": { je: "suis mort(e)", tu: "es mort(e)", "il/elle": "est mort(e)", nous: "sommes mort(e)s", vous: "êtes mort(e)(s)", "ils/elles": "sont mort(e)s" },
      imparfait: { je: "mourais", tu: "mourais", "il/elle": "mourait", nous: "mourions", vous: "mouriez", "ils/elles": "mouraient" },
      "plus-que-parfait": { je: "étais mort(e)", tu: "étais mort(e)", "il/elle": "était mort(e)", nous: "étions mort(e)s", vous: "étiez mort(e)(s)", "ils/elles": "étaient mort(e)s" },
    }
  },
  {
    id: 32,
    infinitive: "connaître",
    translation: "conocer",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "connu",
    conjugations: {
      présent: { je: "connais", tu: "connais", "il/elle": "connaît", nous: "connaissons", vous: "connaissez", "ils/elles": "connaissent" },
      "passé composé": { je: "ai connu", tu: "as connu", "il/elle": "a connu", nous: "avons connu", vous: "avez connu", "ils/elles": "ont connu" },
      imparfait: { je: "connaissais", tu: "connaissais", "il/elle": "connaissait", nous: "connaissions", vous: "connaissiez", "ils/elles": "connaissaient" },
      "plus-que-parfait": { je: "avais connu", tu: "avais connu", "il/elle": "avait connu", nous: "avions connu", vous: "aviez connu", "ils/elles": "avaient connu" }
    }
  },
  {
    id: 33,
    infinitive: "croire",
    translation: "creer",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "cru",
    conjugations: {
      présent: { je: "crois", tu: "crois", "il/elle": "croit", nous: "croyons", vous: "croyez", "ils/elles": "croient" },
      "passé composé": { je: "ai cru", tu: "as cru", "il/elle": "a cru", nous: "avons cru", vous: "avez cru", "ils/elles": "ont cru" },
      imparfait: { je: "croyais", tu: "croyais", "il/elle": "croyait", nous: "croyions", vous: "croyiez", "ils/elles": "croyaient" },
      "plus-que-parfait": { je: "avais cru", tu: "avais cru", "il/elle": "avait cru", nous: "avions cru", vous: "aviez cru", "ils/elles": "avaient cru" },
    }
  },
  {
    id: 34,
    infinitive: "penser",
    translation: "pensar",
    type: "regular",
    group: 1,
    auxiliaire: "avoir",
    participe: "pensé",
    conjugations: {
      présent: { je: "pense", tu: "penses", "il/elle": "pense", nous: "pensons", vous: "pensez", "ils/elles": "pensent" },
      "passé composé": { je: "ai pensé", tu: "as pensé", "il/elle": "a pensé", nous: "avons pensé", vous: "avez pensé", "ils/elles": "ont pensé" },
      imparfait: { je: "pensais", tu: "pensais", "il/elle": "pensait", nous: "pensions", vous: "pensiez", "ils/elles": "pensaient" },
      "plus-que-parfait": { je: "avais pensé", tu: "avais pensé", "il/elle": "avait pensé", nous: "avions pensé", vous: "aviez pensé", "ils/elles": "avaient pensé" }
    }
  },
  {
    id: 35,
    infinitive: "trouver",
    translation: "encontrar",
    type: "regular",
    group: 1,
    auxiliaire: "avoir",
    participe: "trouvé",
    conjugations: {
      présent: { je: "trouve", tu: "trouves", "il/elle": "trouve", nous: "trouvons", vous: "trouvez", "ils/elles": "trouvent" },
      "passé composé": { je: "ai trouvé", tu: "as trouvé", "il/elle": "a trouvé", nous: "avons trouvé", vous: "avez trouvé", "ils/elles": "ont trouvé" },
      imparfait: { je: "trouvais", tu: "trouvais", "il/elle": "trouvait", nous: "trouvions", vous: "trouviez", "ils/elles": "trouvaient" },
      "plus-que-parfait": { je: "avais trouvé", tu: "avais trouvé", "il/elle": "avait trouvé", nous: "avions trouvé", vous: "aviez trouvé", "ils/elles": "avaient trouvé" }
    }
  },
  {
    id: 36,
    infinitive: "chercher",
    translation: "buscar",
    type: "regular",
    group: 1,
    auxiliaire: "avoir",
    participe: "cherché",
    conjugations: {
      présent: { je: "cherche", tu: "cherches", "il/elle": "cherche", nous: "cherchons", vous: "cherchez", "ils/elles": "cherchent" },
      "passé composé": { je: "ai cherché", tu: "as cherché", "il/elle": "a cherché", nous: "avons cherché", vous: "avez cherché", "ils/elles": "ont cherché" },
      imparfait: { je: "cherchais", tu: "cherchais", "il/elle": "cherchait", nous: "cherchions", vous: "cherchiez", "ils/elles": "cherchaient" },
      "plus-que-parfait": { je: "avais cherché", tu: "avais cherché", "il/elle": "avait cherché", nous: "avions cherché", vous: "aviez cherché", "ils/elles": "avaient cherché" },
    }
  },
  {
    id: 37,
    infinitive: "attendre",
    translation: "esperar",
    type: "regular",
    group: 3,
    auxiliaire: "avoir",
    participe: "attendu",
    conjugations: {
      présent: { je: "attends", tu: "attends", "il/elle": "attend", nous: "attendons", vous: "attendez", "ils/elles": "attendent" },
      "passé composé": { je: "ai attendu", tu: "as attendu", "il/elle": "a attendu", nous: "avons attendu", vous: "avez attendu", "ils/elles": "ont attendu" },
      imparfait: { je: "attendais", tu: "attendais", "il/elle": "attendait", nous: "attendions", vous: "attendiez", "ils/elles": "attendaient" },
      "plus-que-parfait": { je: "avais attendu", tu: "avais attendu", "il/elle": "avait attendu", nous: "avions attendu", vous: "aviez attendu", "ils/elles": "avaient attendu" }
    }
  },
  {
    id: 38,
    infinitive: "entendre",
    translation: "oír",
    type: "regular",
    group: 3,
    auxiliaire: "avoir",
    participe: "entendu",
    conjugations: {
      présent: { je: "entends", tu: "entends", "il/elle": "entend", nous: "entendons", vous: "entendez", "ils/elles": "entendent" },
      "passé composé": { je: "ai entendu", tu: "as entendu", "il/elle": "a entendu", nous: "avons entendu", vous: "avez entendu", "ils/elles": "ont entendu" },
      imparfait: { je: "entendais", tu: "entendais", "il/elle": "entendait", nous: "entendions", vous: "entendiez", "ils/elles": "entendaient" },
      "plus-que-parfait": { je: "avais entendu", tu: "avais entendu", "il/elle": "avait entendu", nous: "avions entendu", vous: "aviez entendu", "ils/elles": "avaient entendu" }
    }
  },
  {
    id: 39,
    infinitive: "répondre",
    translation: "responder",
    type: "regular",
    group: 3,
    auxiliaire: "avoir",
    participe: "répondu",
    conjugations: {
      présent: { je: "réponds", tu: "réponds", "il/elle": "répond", nous: "répondons", vous: "répondez", "ils/elles": "répondent" },
      "passé composé": { je: "ai répondu", tu: "as répondu", "il/elle": "a répondu", nous: "avons répondu", vous: "avez répondu", "ils/elles": "ont répondu" },
      imparfait: { je: "répondais", tu: "répondais", "il/elle": "répondait", nous: "répondions", vous: "répondiez", "ils/elles": "répondaient" },
      "plus-que-parfait": { je: "avais répondu", tu: "avais répondu", "il/elle": "avait répondu", nous: "avions répondu", vous: "aviez répondu", "ils/elles": "avaient répondu" }
    }
  },
  {
    id: 40,
    infinitive: "perdre",
    translation: "perder",
    type: "regular",
    group: 3,
    auxiliaire: "avoir",
    participe: "perdu",
    conjugations: {
      présent: { je: "perds", tu: "perds", "il/elle": "perd", nous: "perdons", vous: "perdez", "ils/elles": "perdent" },
      "passé composé": { je: "ai perdu", tu: "as perdu", "il/elle": "a perdu", nous: "avons perdu", vous: "avez perdu", "ils/elles": "ont perdu" },
      imparfait: { je: "perdais", tu: "perdais", "il/elle": "perdait", nous: "perdions", vous: "perdiez", "ils/elles": "perdaient" },
      "plus-que-parfait": { je: "avais perdu", tu: "avais perdu", "il/elle": "avait perdu", nous: "avions perdu", vous: "aviez perdu", "ils/elles": "avaient perdu" }
    }
  },
  {
    id: 41,
    infinitive: "rendre",
    translation: "devolver",
    type: "regular",
    group: 3,
    auxiliaire: "avoir",
    participe: "rendu",
    conjugations: {
      présent: { je: "rends", tu: "rends", "il/elle": "rend", nous: "rendons", vous: "rendez", "ils/elles": "rendent" },
      "passé composé": { je: "ai rendu", tu: "as rendu", "il/elle": "a rendu", nous: "avons rendu", vous: "avez rendu", "ils/elles": "ont rendu" },
      imparfait: { je: "rendais", tu: "rendais", "il/elle": "rendait", nous: "rendions", vous: "rendiez", "ils/elles": "rendaient" },
      "plus-que-parfait": { je: "avais rendu", tu: "avais rendu", "il/elle": "avait rendu", nous: "avions rendu", vous: "aviez rendu", "ils/elles": "avaient rendu" },
    }
  },
  {
    id: 42,
    infinitive: "vendre",
    translation: "vender",
    type: "regular",
    group: 3,
    auxiliaire: "avoir",
    participe: "vendu",
    conjugations: {
      présent: { je: "vends", tu: "vends", "il/elle": "vend", nous: "vendons", vous: "vendez", "ils/elles": "vendent" },
      "passé composé": { je: "ai vendu", tu: "as vendu", "il/elle": "a vendu", nous: "avons vendu", vous: "avez vendu", "ils/elles": "ont vendu" },
      imparfait: { je: "vendais", tu: "vendais", "il/elle": "vendait", nous: "vendions", vous: "vendiez", "ils/elles": "vendaient" },
      "plus-que-parfait": { je: "avais vendu", tu: "avais vendu", "il/elle": "avait vendu", nous: "avions vendu", vous: "aviez vendu", "ils/elles": "avaient vendu" }
    }
  },
  {
    id: 43,
    infinitive: "comprendre",
    translation: "comprender",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "compris",
    conjugations: {
      présent: { je: "comprends", tu: "comprends", "il/elle": "comprend", nous: "comprenons", vous: "comprenez", "ils/elles": "comprennent" },
      "passé composé": { je: "ai compris", tu: "as compris", "il/elle": "a compris", nous: "avons compris", vous: "avez compris", "ils/elles": "ont compris" },
      imparfait: { je: "comprenais", tu: "comprenais", "il/elle": "comprenait", nous: "comprenions", vous: "compreniez", "ils/elles": "comprenaient" },
      "plus-que-parfait": { je: "avais compris", tu: "avais compris", "il/elle": "avait compris", nous: "avions compris", vous: "aviez compris", "ils/elles": "avaient compris" }
    }
  },
  {
    id: 44,
    infinitive: "apprendre",
    translation: "aprender",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "appris",
    conjugations: {
      présent: { je: "apprends", tu: "apprends", "il/elle": "apprend", nous: "apprenons", vous: "apprenez", "ils/elles": "apprennent" },
      "passé composé": { je: "ai appris", tu: "as appris", "il/elle": "a appris", nous: "avons appris", vous: "avez appris", "ils/elles": "ont appris" },
      imparfait: { je: "apprenais", tu: "apprenais", "il/elle": "apprenait", nous: "apprenions", vous: "appreniez", "ils/elles": "apprenaient" },
      "plus-que-parfait": { je: "avais appris", tu: "avais appris", "il/elle": "avait appris", nous: "avions appris", vous: "aviez appris", "ils/elles": "avaient appris" },
    }
  },
  {
    id: 45,
    infinitive: "ouvrir",
    translation: "abrir",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "ouvert",
    conjugations: {
      présent: { je: "ouvre", tu: "ouvres", "il/elle": "ouvre", nous: "ouvrons", vous: "ouvrez", "ils/elles": "ouvrent" },
      "passé composé": { je: "ai ouvert", tu: "as ouvert", "il/elle": "a ouvert", nous: "avons ouvert", vous: "avez ouvert", "ils/elles": "ont ouvert" },
      imparfait: { je: "ouvrais", tu: "ouvrais", "il/elle": "ouvrait", nous: "ouvrions", vous: "ouvriez", "ils/elles": "ouvraient" },
      "plus-que-parfait": { je: "avais ouvert", tu: "avais ouvert", "il/elle": "avait ouvert", nous: "avions ouvert", vous: "aviez ouvert", "ils/elles": "avaient ouvert" },
    }
  },
  {
    id: 46,
    infinitive: "offrir",
    translation: "ofrecer",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "offert",
    conjugations: {
      présent: { je: "offre", tu: "offres", "il/elle": "offre", nous: "offrons", vous: "offrez", "ils/elles": "offrent" },
      "passé composé": { je: "ai offert", tu: "as offert", "il/elle": "a offert", nous: "avons offert", vous: "avez offert", "ils/elles": "ont offert" },
      imparfait: { je: "offrais", tu: "offrais", "il/elle": "offrait", nous: "offrions", vous: "offriez", "ils/elles": "offraient" },
      "plus-que-parfait": { je: "avais offert", tu: "avais offert", "il/elle": "avait offert", nous: "avions offert", vous: "aviez offert", "ils/elles": "avaient offert" },
    }
  },
  {
    id: 47,
    infinitive: "courir",
    translation: "correr",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "couru",
    conjugations: {
      présent: { je: "cours", tu: "cours", "il/elle": "court", nous: "courons", vous: "courez", "ils/elles": "courent" },
      "passé composé": { je: "ai couru", tu: "as couru", "il/elle": "a couru", nous: "avons couru", vous: "avez couru", "ils/elles": "ont couru" },
      imparfait: { je: "courais", tu: "courais", "il/elle": "courait", nous: "courions", vous: "couriez", "ils/elles": "couraient" },
      "plus-que-parfait": { je: "avais couru", tu: "avais couru", "il/elle": "avait couru", nous: "avions couru", vous: "aviez couru", "ils/elles": "avaient couru" },
    }
  },
  {
    id: 48,
    infinitive: "sentir",
    translation: "sentir",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "senti",
    conjugations: {
      présent: { je: "sens", tu: "sens", "il/elle": "sent", nous: "sentons", vous: "sentez", "ils/elles": "sentent" },
      "passé composé": { je: "ai senti", tu: "as senti", "il/elle": "a senti", nous: "avons senti", vous: "avez senti", "ils/elles": "ont senti" },
      imparfait: { je: "sentais", tu: "sentais", "il/elle": "sentait", nous: "sentions", vous: "sentiez", "ils/elles": "sentaient" },
      "plus-que-parfait": { je: "avais senti", tu: "avais senti", "il/elle": "avait senti", nous: "avions senti", vous: "aviez senti", "ils/elles": "avaient senti" }
    }
  },
  {
    id: 49,
    infinitive: "tenir",
    translation: "tener/sostener",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "tenu",
    conjugations: {
      présent: { je: "tiens", tu: "tiens", "il/elle": "tient", nous: "tenons", vous: "tenez", "ils/elles": "tiennent" },
      "passé composé": { je: "ai tenu", tu: "as tenu", "il/elle": "a tenu", nous: "avons tenu", vous: "avez tenu", "ils/elles": "ont tenu" },
      imparfait: { je: "tenais", tu: "tenais", "il/elle": "tenait", nous: "tenions", vous: "teniez", "ils/elles": "tenaient" },
      "plus-que-parfait": { je: "avais tenu", tu: "avais tenu", "il/elle": "avait tenu", nous: "avions tenu", vous: "aviez tenu", "ils/elles": "avaient tenu" }
    }
  },
  {
    id: 50,
    infinitive: "revenir",
    translation: "volver",
    type: "irregular",
    group: 3,
    auxiliaire: "être",
    participe: "revenu",
    conjugations: {
      présent: { je: "reviens", tu: "reviens", "il/elle": "revient", nous: "revenons", vous: "revenez", "ils/elles": "reviennent" },
      "passé composé": { je: "suis revenu(e)", tu: "es revenu(e)", "il/elle": "est revenu(e)", nous: "sommes revenu(e)s", vous: "êtes revenu(e)(s)", "ils/elles": "sont revenu(e)s" },
      imparfait: { je: "revenais", tu: "revenais", "il/elle": "revenait", nous: "revenions", vous: "reveniez", "ils/elles": "revenaient" },
      "plus-que-parfait": { je: "étais revenu(e)", tu: "étais revenu(e)", "il/elle": "était revenu(e)", nous: "étions revenu(e)s", vous: "étiez revenu(e)(s)", "ils/elles": "étaient revenu(e)s" },
    }
  },
  {
    id: 51,
    infinitive: "devenir",
    translation: "convertirse",
    type: "irregular",
    group: 3,
    auxiliaire: "être",
    participe: "devenu",
    conjugations: {
      présent: { je: "deviens", tu: "deviens", "il/elle": "devient", nous: "devenons", vous: "devenez", "ils/elles": "deviennent" },
      "passé composé": { je: "suis devenu(e)", tu: "es devenu(e)", "il/elle": "est devenu(e)", nous: "sommes devenu(e)s", vous: "êtes devenu(e)(s)", "ils/elles": "sont devenu(e)s" },
      imparfait: { je: "devenais", tu: "devenais", "il/elle": "devenait", nous: "devenions", vous: "deveniez", "ils/elles": "devenaient" },
      "plus-que-parfait": { je: "étais devenu(e)", tu: "étais devenu(e)", "il/elle": "était devenu(e)", nous: "étions devenu(e)s", vous: "étiez devenu(e)(s)", "ils/elles": "étaient devenu(e)s" },
    }
  },
  {
    id: 52,
    infinitive: "suivre",
    translation: "seguir",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "suivi",
    conjugations: {
      présent: { je: "suis", tu: "suis", "il/elle": "suit", nous: "suivons", vous: "suivez", "ils/elles": "suivent" },
      "passé composé": { je: "ai suivi", tu: "as suivi", "il/elle": "a suivi", nous: "avons suivi", vous: "avez suivi", "ils/elles": "ont suivi" },
      imparfait: { je: "suivais", tu: "suivais", "il/elle": "suivait", nous: "suivions", vous: "suiviez", "ils/elles": "suivaient" },
      "plus-que-parfait": { je: "avais suivi", tu: "avais suivi", "il/elle": "avait suivi", nous: "avions suivi", vous: "aviez suivi", "ils/elles": "avaient suivi" },
    }
  },
  {
    id: 53,
    infinitive: "vivre",
    translation: "vivir",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "vécu",
    conjugations: {
      présent: { je: "vis", tu: "vis", "il/elle": "vit", nous: "vivons", vous: "vivez", "ils/elles": "vivent" },
      "passé composé": { je: "ai vécu", tu: "as vécu", "il/elle": "a vécu", nous: "avons vécu", vous: "avez vécu", "ils/elles": "ont vécu" },
      imparfait: { je: "vivais", tu: "vivais", "il/elle": "vivait", nous: "vivions", vous: "viviez", "ils/elles": "vivaient" },
      "plus-que-parfait": { je: "avais vécu", tu: "avais vécu", "il/elle": "avait vécu", nous: "avions vécu", vous: "aviez vécu", "ils/elles": "avaient vécu" }
    }
  },
  {
    id: 54,
    infinitive: "recevoir",
    translation: "recibir",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "reçu",
    conjugations: {
      présent: { je: "reçois", tu: "reçois", "il/elle": "reçoit", nous: "recevons", vous: "recevez", "ils/elles": "reçoivent" },
      "passé composé": { je: "ai reçu", tu: "as reçu", "il/elle": "a reçu", nous: "avons reçu", vous: "avez reçu", "ils/elles": "ont reçu" },
      imparfait: { je: "recevais", tu: "recevais", "il/elle": "recevait", nous: "recevions", vous: "receviez", "ils/elles": "recevaient" },
      "plus-que-parfait": { je: "avais reçu", tu: "avais reçu", "il/elle": "avait reçu", nous: "avions reçu", vous: "aviez reçu", "ils/elles": "avaient reçu" },
    }
  },
  {
    id: 55,
    infinitive: "envoyer",
    translation: "enviar",
    type: "irregular",
    group: 1,
    auxiliaire: "avoir",
    participe: "envoyé",
    conjugations: {
      présent: { je: "envoie", tu: "envoies", "il/elle": "envoie", nous: "envoyons", vous: "envoyez", "ils/elles": "envoient" },
      "passé composé": { je: "ai envoyé", tu: "as envoyé", "il/elle": "a envoyé", nous: "avons envoyé", vous: "avez envoyé", "ils/elles": "ont envoyé" },
      imparfait: { je: "envoyais", tu: "envoyais", "il/elle": "envoyait", nous: "envoyions", vous: "envoyiez", "ils/elles": "envoyaient" },
      "plus-que-parfait": { je: "avais envoyé", tu: "avais envoyé", "il/elle": "avait envoyé", nous: "avions envoyé", vous: "aviez envoyé", "ils/elles": "avaient envoyé" },
    }
  },
  {
    id: 56,
    infinitive: "appeler",
    translation: "llamar",
    type: "irregular",
    group: 1,
    auxiliaire: "avoir",
    participe: "appelé",
    conjugations: {
      présent: { je: "appelle", tu: "appelles", "il/elle": "appelle", nous: "appelons", vous: "appelez", "ils/elles": "appellent" },
      "passé composé": { je: "ai appelé", tu: "as appelé", "il/elle": "a appelé", nous: "avons appelé", vous: "avez appelé", "ils/elles": "ont appelé" },
      imparfait: { je: "appelais", tu: "appelais", "il/elle": "appelait", nous: "appelions", vous: "appeliez", "ils/elles": "appelaient" },
      "plus-que-parfait": { je: "avais appelé", tu: "avais appelé", "il/elle": "avait appelé", nous: "avions appelé", vous: "aviez appelé", "ils/elles": "avaient appelé" },
    }
  },
  {
    id: 57,
    infinitive: "jeter",
    translation: "tirar",
    type: "irregular",
    group: 1,
    auxiliaire: "avoir",
    participe: "jeté",
    conjugations: {
      présent: { je: "jette", tu: "jettes", "il/elle": "jette", nous: "jetons", vous: "jetez", "ils/elles": "jettent" },
      "passé composé": { je: "ai jeté", tu: "as jeté", "il/elle": "a jeté", nous: "avons jeté", vous: "avez jeté", "ils/elles": "ont jeté" },
      imparfait: { je: "jetais", tu: "jetais", "il/elle": "jetait", nous: "jetions", vous: "jetiez", "ils/elles": "jetaient" },
      "plus-que-parfait": { je: "avais jeté", tu: "avais jeté", "il/elle": "avait jeté", nous: "avions jeté", vous: "aviez jeté", "ils/elles": "avaient jeté" },
    }
  },
  {
    id: 58,
    infinitive: "acheter",
    translation: "comprar",
    type: "irregular",
    group: 1,
    auxiliaire: "avoir",
    participe: "acheté",
    conjugations: {
      présent: { je: "achète", tu: "achètes", "il/elle": "achète", nous: "achetons", vous: "achetez", "ils/elles": "achètent" },
      "passé composé": { je: "ai acheté", tu: "as acheté", "il/elle": "a acheté", nous: "avons acheté", vous: "avez acheté", "ils/elles": "ont acheté" },
      imparfait: { je: "achetais", tu: "achetais", "il/elle": "achetait", nous: "achetions", vous: "achetiez", "ils/elles": "achetaient" },
      "plus-que-parfait": { je: "avais acheté", tu: "avais acheté", "il/elle": "avait acheté", nous: "avions acheté", vous: "aviez acheté", "ils/elles": "avaient acheté" },
    }
  },
  {
    id: 59,
    infinitive: "payer",
    translation: "pagar",
    type: "irregular",
    group: 1,
    auxiliaire: "avoir",
    participe: "payé",
    conjugations: {
      présent: { je: "paie", tu: "paies", "il/elle": "paie", nous: "payons", vous: "payez", "ils/elles": "paient" },
      "passé composé": { je: "ai payé", tu: "as payé", "il/elle": "a payé", nous: "avons payé", vous: "avez payé", "ils/elles": "ont payé" },
      imparfait: { je: "payais", tu: "payais", "il/elle": "payait", nous: "payions", vous: "payiez", "ils/elles": "payaient" },
      "plus-que-parfait": { je: "avais payé", tu: "avais payé", "il/elle": "avait payé", nous: "avions payé", vous: "aviez payé", "ils/elles": "avaient payé" }
    }
  },
  {
    id: 60,
    infinitive: "essayer",
    translation: "intentar",
    type: "irregular",
    group: 1,
    auxiliaire: "avoir",
    participe: "essayé",
    conjugations: {
      présent: { je: "essaie", tu: "essaies", "il/elle": "essaie", nous: "essayons", vous: "essayez", "ils/elles": "essaient" },
      "passé composé": { je: "ai essayé", tu: "as essayé", "il/elle": "a essayé", nous: "avons essayé", vous: "avez essayé", "ils/elles": "ont essayé" },
      imparfait: { je: "essayais", tu: "essayais", "il/elle": "essayait", nous: "essayions", vous: "essayiez", "ils/elles": "essayaient" },
      "plus-que-parfait": { je: "avais essayé", tu: "avais essayé", "il/elle": "avait essayé", nous: "avions essayé", vous: "aviez essayé", "ils/elles": "avaient essayé" },
    }
  },
  {
    id: 61,
    infinitive: "commencer",
    translation: "empezar",
    type: "regular",
    group: 1,
    auxiliaire: "avoir",
    participe: "commencé",
    conjugations: {
      présent: { je: "commence", tu: "commences", "il/elle": "commence", nous: "commençons", vous: "commencez", "ils/elles": "commencent" },
      "passé composé": { je: "ai commencé", tu: "as commencé", "il/elle": "a commencé", nous: "avons commencé", vous: "avez commencé", "ils/elles": "ont commencé" },
      imparfait: { je: "commençais", tu: "commençais", "il/elle": "commençait", nous: "commencions", vous: "commenciez", "ils/elles": "commençaient" },
      "plus-que-parfait": { je: "avais commencé", tu: "avais commencé", "il/elle": "avait commencé", nous: "avions commencé", vous: "aviez commencé", "ils/elles": "avaient commencé" }
    }
  },
  {
    id: 62,
    infinitive: "finir",
    translation: "terminar",
    type: "regular",
    group: 2,
    auxiliaire: "avoir",
    participe: "fini",
    conjugations: {
      présent: { je: "finis", tu: "finis", "il/elle": "finit", nous: "finissons", vous: "finissez", "ils/elles": "finissent" },
      "passé composé": { je: "ai fini", tu: "as fini", "il/elle": "a fini", nous: "avons fini", vous: "avez fini", "ils/elles": "ont fini" },
      imparfait: { je: "finissais", tu: "finissais", "il/elle": "finissait", nous: "finissions", vous: "finissiez", "ils/elles": "finissaient" },
      "plus-que-parfait": { je: "avais fini", tu: "avais fini", "il/elle": "avait fini", nous: "avions fini", vous: "aviez fini", "ils/elles": "avaient fini" },
    }
  },
  {
    id: 63,
    infinitive: "choisir",
    translation: "elegir",
    type: "regular",
    group: 2,
    auxiliaire: "avoir",
    participe: "choisi",
    conjugations: {
      présent: { je: "choisis", tu: "choisis", "il/elle": "choisit", nous: "choisissons", vous: "choisissez", "ils/elles": "choisissent" },
      "passé composé": { je: "ai choisi", tu: "as choisi", "il/elle": "a choisi", nous: "avons choisi", vous: "avez choisi", "ils/elles": "ont choisi" },
      imparfait: { je: "choisissais", tu: "choisissais", "il/elle": "choisissait", nous: "choisissions", vous: "choisissiez", "ils/elles": "choisissaient" },
      "plus-que-parfait": { je: "avais choisi", tu: "avais choisi", "il/elle": "avait choisi", nous: "avions choisi", vous: "aviez choisi", "ils/elles": "avaient choisi" },
    }
  },
  {
    id: 64,
    infinitive: "réussir",
    translation: "tener éxito",
    type: "regular",
    group: 2,
    auxiliaire: "avoir",
    participe: "réussi",
    conjugations: {
      présent: { je: "réussis", tu: "réussis", "il/elle": "réussit", nous: "réussissons", vous: "réussissez", "ils/elles": "réussissent" },
      "passé composé": { je: "ai réussi", tu: "as réussi", "il/elle": "a réussi", nous: "avons réussi", vous: "avez réussi", "ils/elles": "ont réussi" },
      imparfait: { je: "réussissais", tu: "réussissais", "il/elle": "réussissait", nous: "réussissions", vous: "réussissiez", "ils/elles": "réussissaient" },
      "plus-que-parfait": { je: "avais réussi", tu: "avais réussi", "il/elle": "avait réussi", nous: "avions réussi", vous: "aviez réussi", "ils/elles": "avaient réussi" },
    }
  },
  {
    id: 65,
    infinitive: "remplir",
    translation: "llenar",
    type: "regular",
    group: 2,
    auxiliaire: "avoir",
    participe: "rempli",
    conjugations: {
      présent: { je: "remplis", tu: "remplis", "il/elle": "remplit", nous: "remplissons", vous: "remplissez", "ils/elles": "remplissent" },
      "passé composé": { je: "ai rempli", tu: "as rempli", "il/elle": "a rempli", nous: "avons rempli", vous: "avez rempli", "ils/elles": "ont rempli" },
      imparfait: { je: "remplissais", tu: "remplissais", "il/elle": "remplissait", nous: "remplissions", vous: "remplissiez", "ils/elles": "remplissaient" },
      "plus-que-parfait": { je: "avais rempli", tu: "avais rempli", "il/elle": "avait rempli", nous: "avions rempli", vous: "aviez rempli", "ils/elles": "avaient rempli" }
    }
  },
  {
    id: 66,
    infinitive: "réfléchir",
    translation: "reflexionar",
    type: "regular",
    group: 2,
    auxiliaire: "avoir",
    participe: "réfléchi",
    conjugations: {
      présent: { je: "réfléchis", tu: "réfléchis", "il/elle": "réfléchit", nous: "réfléchissons", vous: "réfléchissez", "ils/elles": "réfléchissent" },
      "passé composé": { je: "ai réfléchi", tu: "as réfléchi", "il/elle": "a réfléchi", nous: "avons réfléchi", vous: "avez réfléchi", "ils/elles": "ont réfléchi" },
      imparfait: { je: "réfléchissais", tu: "réfléchissais", "il/elle": "réfléchissait", nous: "réfléchissions", vous: "réfléchissiez", "ils/elles": "réfléchissaient" },
      "plus-que-parfait": { je: "avais réfléchi", tu: "avais réfléchi", "il/elle": "avait réfléchi", nous: "avions réfléchi", vous: "aviez réfléchi", "ils/elles": "avaient réfléchi" }
    }
  },
  {
    id: 67,
    infinitive: "grandir",
    translation: "crecer",
    type: "regular",
    group: 2,
    auxiliaire: "avoir",
    participe: "grandi",
    conjugations: {
      présent: { je: "grandis", tu: "grandis", "il/elle": "grandit", nous: "grandissons", vous: "grandissez", "ils/elles": "grandissent" },
      "passé composé": { je: "ai grandi", tu: "as grandi", "il/elle": "a grandi", nous: "avons grandi", vous: "avez grandi", "ils/elles": "ont grandi" },
      imparfait: { je: "grandissais", tu: "grandissais", "il/elle": "grandissait", nous: "grandissions", vous: "grandissiez", "ils/elles": "grandissaient" },
      "plus-que-parfait": { je: "avais grandi", tu: "avais grandi", "il/elle": "avait grandi", nous: "avions grandi", vous: "aviez grandi", "ils/elles": "avaient grandi" }
    }
  },
  {
    id: 68,
    infinitive: "obéir",
    translation: "obedecer",
    type: "regular",
    group: 2,
    auxiliaire: "avoir",
    participe: "obéi",
    conjugations: {
      présent: { je: "obéis", tu: "obéis", "il/elle": "obéit", nous: "obéissons", vous: "obéissez", "ils/elles": "obéissent" },
      "passé composé": { je: "ai obéi", tu: "as obéi", "il/elle": "a obéi", nous: "avons obéi", vous: "avez obéi", "ils/elles": "ont obéi" },
      imparfait: { je: "obéissais", tu: "obéissais", "il/elle": "obéissait", nous: "obéissions", vous: "obéissiez", "ils/elles": "obéissaient" },
      "plus-que-parfait": { je: "avais obéi", tu: "avais obéi", "il/elle": "avait obéi", nous: "avions obéi", vous: "aviez obéi", "ils/elles": "avaient obéi" }
    }
  },
  {
    id: 69,
    infinitive: "punir",
    translation: "castigar",
    type: "regular",
    group: 2,
    auxiliaire: "avoir",
    participe: "puni",
    conjugations: {
      présent: { je: "punis", tu: "punis", "il/elle": "punit", nous: "punissons", vous: "punissez", "ils/elles": "punissent" },
      "passé composé": { je: "ai puni", tu: "as puni", "il/elle": "a puni", nous: "avons puni", vous: "avez puni", "ils/elles": "ont puni" },
      imparfait: { je: "punissais", tu: "punissais", "il/elle": "punissait", nous: "punissions", vous: "punissiez", "ils/elles": "punissaient" },
      "plus-que-parfait": { je: "avais puni", tu: "avais puni", "il/elle": "avait puni", nous: "avions puni", vous: "aviez puni", "ils/elles": "avaient puni" }
    }
  },
  {
    id: 70,
    infinitive: "applaudir",
    translation: "aplaudir",
    type: "regular",
    group: 2,
    auxiliaire: "avoir",
    participe: "applaudi",
    conjugations: {
      présent: { je: "applaudis", tu: "applaudis", "il/elle": "applaudit", nous: "applaudissons", vous: "applaudissez", "ils/elles": "applaudissent" },
      "passé composé": { je: "ai applaudi", tu: "as applaudi", "il/elle": "a applaudi", nous: "avons applaudi", vous: "avez applaudi", "ils/elles": "ont applaudi" },
      imparfait: { je: "applaudissais", tu: "applaudissais", "il/elle": "applaudissait", nous: "applaudissions", vous: "applaudissiez", "ils/elles": "applaudissaient" },
      "plus-que-parfait": { je: "avais applaudi", tu: "avais applaudi", "il/elle": "avait applaudi", nous: "avions applaudi", vous: "aviez applaudi", "ils/elles": "avaient applaudi" }
    }
  },
  {
    id: 71,
    infinitive: "regarder",
    translation: "mirar",
    type: "regular",
    group: 1,
    auxiliaire: "avoir",
    participe: "regardé",
    conjugations: {
      présent: { je: "regarde", tu: "regardes", "il/elle": "regarde", nous: "regardons", vous: "regardez", "ils/elles": "regardent" },
      "passé composé": { je: "ai regardé", tu: "as regardé", "il/elle": "a regardé", nous: "avons regardé", vous: "avez regardé", "ils/elles": "ont regardé" },
      imparfait: { je: "regardais", tu: "regardais", "il/elle": "regardait", nous: "regardions", vous: "regardiez", "ils/elles": "regardaient" },
      "plus-que-parfait": { je: "avais regardé", tu: "avais regardé", "il/elle": "avait regardé", nous: "avions regardé", vous: "aviez regardé", "ils/elles": "avaient regardé" }
    }
  },
  {
    id: 72,
    infinitive: "écouter",
    translation: "escuchar",
    type: "regular",
    group: 1,
    auxiliaire: "avoir",
    participe: "écouté",
    conjugations: {
      présent: { je: "écoute", tu: "écoutes", "il/elle": "écoute", nous: "écoutons", vous: "écoutez", "ils/elles": "écoutent" },
      "passé composé": { je: "ai écouté", tu: "as écouté", "il/elle": "a écouté", nous: "avons écouté", vous: "avez écouté", "ils/elles": "ont écouté" },
      imparfait: { je: "écoutais", tu: "écoutais", "il/elle": "écoutait", nous: "écoutions", vous: "écoutiez", "ils/elles": "écoutaient" },
      "plus-que-parfait": { je: "avais écouté", tu: "avais écouté", "il/elle": "avait écouté", nous: "avions écouté", vous: "aviez écouté", "ils/elles": "avaient écouté" }
    }
  },
  {
    id: 73,
    infinitive: "jouer",
    translation: "jugar",
    type: "regular",
    group: 1,
    auxiliaire: "avoir",
    participe: "joué",
    conjugations: {
      présent: { je: "joue", tu: "joues", "il/elle": "joue", nous: "jouons", vous: "jouez", "ils/elles": "jouent" },
      "passé composé": { je: "ai joué", tu: "as joué", "il/elle": "a joué", nous: "avons joué", vous: "avez joué", "ils/elles": "ont joué" },
      imparfait: { je: "jouais", tu: "jouais", "il/elle": "jouait", nous: "jouions", vous: "jouiez", "ils/elles": "jouaient" },
      "plus-que-parfait": { je: "avais joué", tu: "avais joué", "il/elle": "avait joué", nous: "avions joué", vous: "aviez joué", "ils/elles": "avaient joué" },
    }
  },
  {
    id: 74,
    infinitive: "travailler",
    translation: "trabajar",
    type: "regular",
    group: 1,
    auxiliaire: "avoir",
    participe: "travaillé",
    conjugations: {
      présent: { je: "travaille", tu: "travailles", "il/elle": "travaille", nous: "travaillons", vous: "travaillez", "ils/elles": "travaillent" },
      "passé composé": { je: "ai travaillé", tu: "as travaillé", "il/elle": "a travaillé", nous: "avons travaillé", vous: "avez travaillé", "ils/elles": "ont travaillé" },
      imparfait: { je: "travaillais", tu: "travaillais", "il/elle": "travaillait", nous: "travaillions", vous: "travailliez", "ils/elles": "travaillaient" },
      "plus-que-parfait": { je: "avais travaillé", tu: "avais travaillé", "il/elle": "avait travaillé", nous: "avions travaillé", vous: "aviez travaillé", "ils/elles": "avaient travaillé" }
    }
  },
  {
    id: 75,
    infinitive: "étudier",
    translation: "estudiar",
    type: "regular",
    group: 1,
    auxiliaire: "avoir",
    participe: "étudié",
    conjugations: {
      présent: { je: "étudie", tu: "étudies", "il/elle": "étudie", nous: "étudions", vous: "étudiez", "ils/elles": "étudient" },
      "passé composé": { je: "ai étudié", tu: "as étudié", "il/elle": "a étudié", nous: "avons étudié", vous: "avez étudié", "ils/elles": "ont étudié" },
      imparfait: { je: "étudiais", tu: "étudiais", "il/elle": "étudiait", nous: "étudiions", vous: "étudiiez", "ils/elles": "étudiaient" },
      "plus-que-parfait": { je: "avais étudié", tu: "avais étudié", "il/elle": "avait étudié", nous: "avions étudié", vous: "aviez étudié", "ils/elles": "avaient étudié" }
    }
  },
  {
    id: 76,
    infinitive: "marcher",
    translation: "caminar",
    type: "regular",
    group: 1,
    auxiliaire: "avoir",
    participe: "marché",
    conjugations: {
      présent: { je: "marche", tu: "marches", "il/elle": "marche", nous: "marchons", vous: "marchez", "ils/elles": "marchent" },
      "passé composé": { je: "ai marché", tu: "as marché", "il/elle": "a marché", nous: "avons marché", vous: "avez marché", "ils/elles": "ont marché" },
      imparfait: { je: "marchais", tu: "marchais", "il/elle": "marchait", nous: "marchions", vous: "marchiez", "ils/elles": "marchaient" },
      "plus-que-parfait": { je: "avais marché", tu: "avais marché", "il/elle": "avait marché", nous: "avions marché", vous: "aviez marché", "ils/elles": "avaient marché" },
    }
  },
  {
    id: 77,
    infinitive: "chanter",
    translation: "cantar",
    type: "regular",
    group: 1,
    auxiliaire: "avoir",
    participe: "chanté",
    conjugations: {
      présent: { je: "chante", tu: "chantes", "il/elle": "chante", nous: "chantons", vous: "chantez", "ils/elles": "chantent" },
      "passé composé": { je: "ai chanté", tu: "as chanté", "il/elle": "a chanté", nous: "avons chanté", vous: "avez chanté", "ils/elles": "ont chanté" },
      imparfait: { je: "chantais", tu: "chantais", "il/elle": "chantait", nous: "chantions", vous: "chantiez", "ils/elles": "chantaient" },
      "plus-que-parfait": { je: "avais chanté", tu: "avais chanté", "il/elle": "avait chanté", nous: "avions chanté", vous: "aviez chanté", "ils/elles": "avaient chanté" }
    }
  },
  {
    id: 78,
    infinitive: "danser",
    translation: "bailar",
    type: "regular",
    group: 1,
    auxiliaire: "avoir",
    participe: "dansé",
    conjugations: {
      présent: { je: "danse", tu: "danses", "il/elle": "danse", nous: "dansons", vous: "dansez", "ils/elles": "dansent" },
      "passé composé": { je: "ai dansé", tu: "as dansé", "il/elle": "a dansé", nous: "avons dansé", vous: "avez dansé", "ils/elles": "ont dansé" },
      imparfait: { je: "dansais", tu: "dansais", "il/elle": "dansait", nous: "dansions", vous: "dansiez", "ils/elles": "dansaient" },
      "plus-que-parfait": { je: "avais dansé", tu: "avais dansé", "il/elle": "avait dansé", nous: "avions dansé", vous: "aviez dansé", "ils/elles": "avaient dansé" }
    }
  },
  {
    id: 79,
    infinitive: "nager",
    translation: "nadar",
    type: "regular",
    group: 1,
    auxiliaire: "avoir",
    participe: "nagé",
    conjugations: {
      présent: { je: "nage", tu: "nages", "il/elle": "nage", nous: "nageons", vous: "nagez", "ils/elles": "nagent" },
      "passé composé": { je: "ai nagé", tu: "as nagé", "il/elle": "a nagé", nous: "avons nagé", vous: "avez nagé", "ils/elles": "ont nagé" },
      imparfait: { je: "nageais", tu: "nageais", "il/elle": "nageait", nous: "nagions", vous: "nagiez", "ils/elles": "nageaient" },
      "plus-que-parfait": { je: "avais nagé", tu: "avais nagé", "il/elle": "avait nagé", nous: "avions nagé", vous: "aviez nagé", "ils/elles": "avaient nagé" }
    }
  },
  {
    id: 80,
    infinitive: "voyager",
    translation: "viajar",
    type: "regular",
    group: 1,
    auxiliaire: "avoir",
    participe: "voyagé",
    conjugations: {
      présent: { je: "voyage", tu: "voyages", "il/elle": "voyage", nous: "voyageons", vous: "voyagez", "ils/elles": "voyagent" },
      "passé composé": { je: "ai voyagé", tu: "as voyagé", "il/elle": "a voyagé", nous: "avons voyagé", vous: "avez voyagé", "ils/elles": "ont voyagé" },
      imparfait: { je: "voyageais", tu: "voyageais", "il/elle": "voyageait", nous: "voyagions", vous: "voyagiez", "ils/elles": "voyageaient" },
      "plus-que-parfait": { je: "avais voyagé", tu: "avais voyagé", "il/elle": "avait voyagé", nous: "avions voyagé", vous: "aviez voyagé", "ils/elles": "avaient voyagé" }
    }
  },
  {
    id: 81,
    infinitive: "habiter",
    translation: "vivir/habitar",
    type: "regular",
    group: 1,
    auxiliaire: "avoir",
    participe: "habité",
    conjugations: {
      présent: { je: "habite", tu: "habites", "il/elle": "habite", nous: "habitons", vous: "habitez", "ils/elles": "habitent" },
      "passé composé": { je: "ai habité", tu: "as habité", "il/elle": "a habité", nous: "avons habité", vous: "avez habité", "ils/elles": "ont habité" },
      imparfait: { je: "habitais", tu: "habitais", "il/elle": "habitait", nous: "habitions", vous: "habitiez", "ils/elles": "habitaient" },
      "plus-que-parfait": { je: "avais habité", tu: "avais habité", "il/elle": "avait habité", nous: "avions habité", vous: "aviez habité", "ils/elles": "avaient habité" }
    }
  },
  {
    id: 82,
    infinitive: "porter",
    translation: "llevar/vestir",
    type: "regular",
    group: 1,
    auxiliaire: "avoir",
    participe: "porté",
    conjugations: {
      présent: { je: "porte", tu: "portes", "il/elle": "porte", nous: "portons", vous: "portez", "ils/elles": "portent" },
      "passé composé": { je: "ai porté", tu: "as porté", "il/elle": "a porté", nous: "avons porté", vous: "avez porté", "ils/elles": "ont porté" },
      imparfait: { je: "portais", tu: "portais", "il/elle": "portait", nous: "portions", vous: "portiez", "ils/elles": "portaient" },
      "plus-que-parfait": { je: "avais porté", tu: "avais porté", "il/elle": "avait porté", nous: "avions porté", vous: "aviez porté", "ils/elles": "avaient porté" }
    }
  },
  {
    id: 83,
    infinitive: "fermer",
    translation: "cerrar",
    type: "regular",
    group: 1,
    auxiliaire: "avoir",
    participe: "fermé",
    conjugations: {
      présent: { je: "ferme", tu: "fermes", "il/elle": "ferme", nous: "fermons", vous: "fermez", "ils/elles": "ferment" },
      "passé composé": { je: "ai fermé", tu: "as fermé", "il/elle": "a fermé", nous: "avons fermé", vous: "avez fermé", "ils/elles": "ont fermé" },
      imparfait: { je: "fermais", tu: "fermais", "il/elle": "fermait", nous: "fermions", vous: "fermiez", "ils/elles": "fermaient" },
      "plus-que-parfait": { je: "avais fermé", tu: "avais fermé", "il/elle": "avait fermé", nous: "avions fermé", vous: "aviez fermé", "ils/elles": "avaient fermé" }
    }
  },
  {
    id: 84,
    infinitive: "montrer",
    translation: "mostrar",
    type: "regular",
    group: 1,
    auxiliaire: "avoir",
    participe: "montré",
    conjugations: {
      présent: { je: "montre", tu: "montres", "il/elle": "montre", nous: "montrons", vous: "montrez", "ils/elles": "montrent" },
      "passé composé": { je: "ai montré", tu: "as montré", "il/elle": "a montré", nous: "avons montré", vous: "avez montré", "ils/elles": "ont montré" },
      imparfait: { je: "montrais", tu: "montrais", "il/elle": "montrait", nous: "montrions", vous: "montriez", "ils/elles": "montraient" },
      "plus-que-parfait": { je: "avais montré", tu: "avais montré", "il/elle": "avait montré", nous: "avions montré", vous: "aviez montré", "ils/elles": "avaient montré" },
    }
  },
  {
    id: 85,
    infinitive: "aider",
    translation: "ayudar",
    type: "regular",
    group: 1,
    auxiliaire: "avoir",
    participe: "aidé",
    conjugations: {
      présent: { je: "aide", tu: "aides", "il/elle": "aide", nous: "aidons", vous: "aidez", "ils/elles": "aident" },
      "passé composé": { je: "ai aidé", tu: "as aidé", "il/elle": "a aidé", nous: "avons aidé", vous: "avez aidé", "ils/elles": "ont aidé" },
      imparfait: { je: "aidais", tu: "aidais", "il/elle": "aidait", nous: "aidions", vous: "aidiez", "ils/elles": "aidaient" },
      "plus-que-parfait": { je: "avais aidé", tu: "avais aidé", "il/elle": "avait aidé", nous: "avions aidé", vous: "aviez aidé", "ils/elles": "avaient aidé" }
    }
  },
  {
    id: 86,
    infinitive: "demander",
    translation: "pedir/preguntar",
    type: "regular",
    group: 1,
    auxiliaire: "avoir",
    participe: "demandé",
    conjugations: {
      présent: { je: "demande", tu: "demandes", "il/elle": "demande", nous: "demandons", vous: "demandez", "ils/elles": "demandent" },
      "passé composé": { je: "ai demandé", tu: "as demandé", "il/elle": "a demandé", nous: "avons demandé", vous: "avez demandé", "ils/elles": "ont demandé" },
      imparfait: { je: "demandais", tu: "demandais", "il/elle": "demandait", nous: "demandions", vous: "demandiez", "ils/elles": "demandaient" },
      "plus-que-parfait": { je: "avais demandé", tu: "avais demandé", "il/elle": "avait demandé", nous: "avions demandé", vous: "aviez demandé", "ils/elles": "avaient demandé" }
    }
  },
  {
    id: 87,
    infinitive: "raconter",
    translation: "contar",
    type: "regular",
    group: 1,
    auxiliaire: "avoir",
    participe: "raconté",
    conjugations: {
      présent: { je: "raconte", tu: "racontes", "il/elle": "raconte", nous: "racontons", vous: "racontez", "ils/elles": "racontent" },
      "passé composé": { je: "ai raconté", tu: "as raconté", "il/elle": "a raconté", nous: "avons raconté", vous: "avez raconté", "ils/elles": "ont raconté" },
      imparfait: { je: "racontais", tu: "racontais", "il/elle": "racontait", nous: "racontions", vous: "racontiez", "ils/elles": "racontaient" },
      "plus-que-parfait": { je: "avais raconté", tu: "avais raconté", "il/elle": "avait raconté", nous: "avions raconté", vous: "aviez raconté", "ils/elles": "avaient raconté" },
    }
  },
  {
    id: 88,
    infinitive: "oublier",
    translation: "olvidar",
    type: "regular",
    group: 1,
    auxiliaire: "avoir",
    participe: "oublié",
    conjugations: {
      présent: { je: "oublie", tu: "oublies", "il/elle": "oublie", nous: "oublions", vous: "oubliez", "ils/elles": "oublient" },
      "passé composé": { je: "ai oublié", tu: "as oublié", "il/elle": "a oublié", nous: "avons oublié", vous: "avez oublié", "ils/elles": "ont oublié" },
      imparfait: { je: "oubliais", tu: "oubliais", "il/elle": "oubliait", nous: "oubliions", vous: "oubliiez", "ils/elles": "oubliaient" },
      "plus-que-parfait": { je: "avais oublié", tu: "avais oublié", "il/elle": "avait oublié", nous: "avions oublié", vous: "aviez oublié", "ils/elles": "avaient oublié" }
    }
  },
  {
    id: 89,
    infinitive: "rappeler",
    translation: "recordar",
    type: "irregular",
    group: 1,
    auxiliaire: "avoir",
    participe: "rappelé",
    conjugations: {
      présent: { je: "rappelle", tu: "rappelles", "il/elle": "rappelle", nous: "rappelons", vous: "rappelez", "ils/elles": "rappellent" },
      "passé composé": { je: "ai rappelé", tu: "as rappelé", "il/elle": "a rappelé", nous: "avons rappelé", vous: "avez rappelé", "ils/elles": "ont rappelé" },
      imparfait: { je: "rappelais", tu: "rappelais", "il/elle": "rappelait", nous: "rappelions", vous: "rappeliez", "ils/elles": "rappelaient" },
      "plus-que-parfait": { je: "avais rappelé", tu: "avais rappelé", "il/elle": "avait rappelé", nous: "avions rappelé", vous: "aviez rappelé", "ils/elles": "avaient rappelé" }
    }
  },
  {
    id: 90,
    infinitive: "passer",
    translation: "pasar",
    type: "regular",
    group: 1,
    auxiliaire: "avoir",
    participe: "passé",
    conjugations: {
      présent: { je: "passe", tu: "passes", "il/elle": "passe", nous: "passons", vous: "passez", "ils/elles": "passent" },
      "passé composé": { je: "ai passé", tu: "as passé", "il/elle": "a passé", nous: "avons passé", vous: "avez passé", "ils/elles": "ont passé" },
      imparfait: { je: "passais", tu: "passais", "il/elle": "passait", nous: "passions", vous: "passiez", "ils/elles": "passaient" },
      "plus-que-parfait": { je: "avais passé", tu: "avais passé", "il/elle": "avait passé", nous: "avions passé", vous: "aviez passé", "ils/elles": "avaient passé" }
    }
  },
  {
    id: 91,
    infinitive: "continuer",
    translation: "continuar",
    type: "regular",
    group: 1,
    auxiliaire: "avoir",
    participe: "continué",
    conjugations: {
      présent: { je: "continue", tu: "continues", "il/elle": "continue", nous: "continuons", vous: "continuez", "ils/elles": "continuent" },
      "passé composé": { je: "ai continué", tu: "as continué", "il/elle": "a continué", nous: "avons continué", vous: "avez continué", "ils/elles": "ont continué" },
      imparfait: { je: "continuais", tu: "continuais", "il/elle": "continuait", nous: "continuions", vous: "continuiez", "ils/elles": "continuaient" },
      "plus-que-parfait": { je: "avais continué", tu: "avais continué", "il/elle": "avait continué", nous: "avions continué", vous: "aviez continué", "ils/elles": "avaient continué" },
    }
  },
  {
    id: 92,
    infinitive: "quitter",
    translation: "dejar",
    type: "regular",
    group: 1,
    auxiliaire: "avoir",
    participe: "quitté",
    conjugations: {
      présent: { je: "quitte", tu: "quittes", "il/elle": "quitte", nous: "quittons", vous: "quittez", "ils/elles": "quittent" },
      "passé composé": { je: "ai quitté", tu: "as quitté", "il/elle": "a quitté", nous: "avons quitté", vous: "avez quitté", "ils/elles": "ont quitté" },
      imparfait: { je: "quittais", tu: "quittais", "il/elle": "quittait", nous: "quittions", vous: "quittiez", "ils/elles": "quittaient" },
      "plus-que-parfait": { je: "avais quitté", tu: "avais quitté", "il/elle": "avait quitté", nous: "avions quitté", vous: "aviez quitté", "ils/elles": "avaient quitté" }
    }
  },
  {
    id: 93,
    infinitive: "rentrer",
    translation: "regresar",
    type: "regular",
    group: 1,
    auxiliaire: "être",
    participe: "rentré",
    conjugations: {
      présent: { je: "rentre", tu: "rentres", "il/elle": "rentre", nous: "rentrons", vous: "rentrez", "ils/elles": "rentrent" },
      "passé composé": { je: "suis rentré(e)", tu: "es rentré(e)", "il/elle": "est rentré(e)", nous: "sommes rentré(e)s", vous: "êtes rentré(e)(s)", "ils/elles": "sont rentré(e)s" },
      imparfait: { je: "rentrais", tu: "rentrais", "il/elle": "rentrait", nous: "rentrions", vous: "rentriez", "ils/elles": "rentraient" },
      "plus-que-parfait": { je: "étais rentré(e)", tu: "étais rentré(e)", "il/elle": "était rentré(e)", nous: "étions rentré(e)s", vous: "étiez rentré(e)(s)", "ils/elles": "étaient rentré(e)s" },
    }
  },
  {
    id: 94,
    infinitive: "retourner",
    translation: "volver",
    type: "regular",
    group: 1,
    auxiliaire: "être",
    participe: "retourné",
    conjugations: {
      présent: { je: "retourne", tu: "retournes", "il/elle": "retourne", nous: "retournons", vous: "retournez", "ils/elles": "retournent" },
      "passé composé": { je: "suis retourné(e)", tu: "es retourné(e)", "il/elle": "est retourné(e)", nous: "sommes retourné(e)s", vous: "êtes retourné(e)(s)", "ils/elles": "sont retourné(e)s" },
      imparfait: { je: "retournais", tu: "retournais", "il/elle": "retournait", nous: "retournions", vous: "retourniez", "ils/elles": "retournaient" },
      "plus-que-parfait": { je: "étais retourné(e)", tu: "étais retourné(e)", "il/elle": "était retourné(e)", nous: "étions retourné(e)s", vous: "étiez retourné(e)(s)", "ils/elles": "étaient retourné(e)s" },
    }
  },
  {
    id: 95,
    infinitive: "plaire",
    translation: "gustar",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "plu",
    conjugations: {
      présent: { je: "plais", tu: "plais", "il/elle": "plaît", nous: "plaisons", vous: "plaisez", "ils/elles": "plaisent" },
      "passé composé": { je: "ai plu", tu: "as plu", "il/elle": "a plu", nous: "avons plu", vous: "avez plu", "ils/elles": "ont plu" },
      imparfait: { je: "plaisais", tu: "plaisais", "il/elle": "plaisait", nous: "plaisions", vous: "plaisiez", "ils/elles": "plaisaient" },
      "plus-que-parfait": { je: "avais plu", tu: "avais plu", "il/elle": "avait plu", nous: "avions plu", vous: "aviez plu", "ils/elles": "avaient plu" },
    }
  },
  {
    id: 96,
    infinitive: "rire",
    translation: "reír",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "ri",
    conjugations: {
      présent: { je: "ris", tu: "ris", "il/elle": "rit", nous: "rions", vous: "riez", "ils/elles": "rient" },
      "passé composé": { je: "ai ri", tu: "as ri", "il/elle": "a ri", nous: "avons ri", vous: "avez ri", "ils/elles": "ont ri" },
      imparfait: { je: "riais", tu: "riais", "il/elle": "riait", nous: "riions", vous: "riiez", "ils/elles": "riaient" },
      "plus-que-parfait": { je: "avais ri", tu: "avais ri", "il/elle": "avait ri", nous: "avions ri", vous: "aviez ri", "ils/elles": "avaient ri" },
    }
  },
  {
    id: 97,
    infinitive: "sourire",
    translation: "sonreír",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "souri",
    conjugations: {
      présent: { je: "souris", tu: "souris", "il/elle": "sourit", nous: "sourions", vous: "souriez", "ils/elles": "sourient" },
      "passé composé": { je: "ai souri", tu: "as souri", "il/elle": "a souri", nous: "avons souri", vous: "avez souri", "ils/elles": "ont souri" },
      imparfait: { je: "souriais", tu: "souriais", "il/elle": "souriait", nous: "souriions", vous: "souriiez", "ils/elles": "souriaient" },
      "plus-que-parfait": { je: "avais souri", tu: "avais souri", "il/elle": "avait souri", nous: "avions souri", vous: "aviez souri", "ils/elles": "avaient souri" }
    }
  },
  {
    id: 98,
    infinitive: "conduire",
    translation: "conducir",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "conduit",
    conjugations: {
      présent: { je: "conduis", tu: "conduis", "il/elle": "conduit", nous: "conduisons", vous: "conduisez", "ils/elles": "conduisent" },
      "passé composé": { je: "ai conduit", tu: "as conduit", "il/elle": "a conduit", nous: "avons conduit", vous: "avez conduit", "ils/elles": "ont conduit" },
      imparfait: { je: "conduisais", tu: "conduisais", "il/elle": "conduisait", nous: "conduisions", vous: "conduisiez", "ils/elles": "conduisaient" },
      "plus-que-parfait": { je: "avais conduit", tu: "avais conduit", "il/elle": "avait conduit", nous: "avions conduit", vous: "aviez conduit", "ils/elles": "avaient conduit" },
    }
  },
  {
    id: 99,
    infinitive: "produire",
    translation: "producir",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "produit",
    conjugations: {
      présent: { je: "produis", tu: "produis", "il/elle": "produit", nous: "produisons", vous: "produisez", "ils/elles": "produisent" },
      "passé composé": { je: "ai produit", tu: "as produit", "il/elle": "a produit", nous: "avons produit", vous: "avez produit", "ils/elles": "ont produit" },
      imparfait: { je: "produisais", tu: "produisais", "il/elle": "produisait", nous: "produisions", vous: "produisiez", "ils/elles": "produisaient" },
      "plus-que-parfait": { je: "avais produit", tu: "avais produit", "il/elle": "avait produit", nous: "avions produit", vous: "aviez produit", "ils/elles": "avaient produit" },
    }
  },
  {
    id: 100,
    infinitive: "construire",
    translation: "construir",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "construit",
    conjugations: {
      présent: { je: "construis", tu: "construis", "il/elle": "construit", nous: "construisons", vous: "construisez", "ils/elles": "construisent" },
      "passé composé": { je: "ai construit", tu: "as construit", "il/elle": "a construit", nous: "avons construit", vous: "avez construit", "ils/elles": "ont construit" },
      imparfait: { je: "construisais", tu: "construisais", "il/elle": "construisait", nous: "construisions", vous: "construisiez", "ils/elles": "construisaient" },
      "plus-que-parfait": { je: "avais construit", tu: "avais construit", "il/elle": "avait construit", nous: "avions construit", vous: "aviez construit", "ils/elles": "avaient construit" },
    }
  },
  {
    id: 101,
    infinitive: "détruire",
    translation: "destruir",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "détruit",
    conjugations: {
      présent: { je: "détruis", tu: "détruis", "il/elle": "détruit", nous: "détruisons", vous: "détruisez", "ils/elles": "détruisent" },
      "passé composé": { je: "ai détruit", tu: "as détruit", "il/elle": "a détruit", nous: "avons détruit", vous: "avez détruit", "ils/elles": "ont détruit" },
      imparfait: { je: "détruisais", tu: "détruisais", "il/elle": "détruisait", nous: "détruisions", vous: "détruisiez", "ils/elles": "détruisaient" },
      "plus-que-parfait": { je: "avais détruit", tu: "avais détruit", "il/elle": "avait détruit", nous: "avions détruit", vous: "aviez détruit", "ils/elles": "avaient détruit" }
    }
  },
  {
    id: 102,
    infinitive: "traduire",
    translation: "traducir",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "traduit",
    conjugations: {
      présent: { je: "traduis", tu: "traduis", "il/elle": "traduit", nous: "traduisons", vous: "traduisez", "ils/elles": "traduisent" },
      "passé composé": { je: "ai traduit", tu: "as traduit", "il/elle": "a traduit", nous: "avons traduit", vous: "avez traduit", "ils/elles": "ont traduit" },
      imparfait: { je: "traduisais", tu: "traduisais", "il/elle": "traduisait", nous: "traduisions", vous: "traduisiez", "ils/elles": "traduisaient" },
      "plus-que-parfait": { je: "avais traduit", tu: "avais traduit", "il/elle": "avait traduit", nous: "avions traduit", vous: "aviez traduit", "ils/elles": "avaient traduit" }
    }
  },
  {
    id: 103,
    infinitive: "servir",
    translation: "servir",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "servi",
    conjugations: {
      présent: { je: "sers", tu: "sers", "il/elle": "sert", nous: "servons", vous: "servez", "ils/elles": "servent" },
      "passé composé": { je: "ai servi", tu: "as servi", "il/elle": "a servi", nous: "avons servi", vous: "avez servi", "ils/elles": "ont servi" },
      imparfait: { je: "servais", tu: "servais", "il/elle": "servait", nous: "servions", vous: "serviez", "ils/elles": "servaient" },
      "plus-que-parfait": { je: "avais servi", tu: "avais servi", "il/elle": "avait servi", nous: "avions servi", vous: "aviez servi", "ils/elles": "avaient servi" },
    }
  },
  {
    id: 104,
    infinitive: "battre",
    translation: "golpear",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "battu",
    conjugations: {
      présent: { je: "bats", tu: "bats", "il/elle": "bat", nous: "battons", vous: "battez", "ils/elles": "battent" },
      "passé composé": { je: "ai battu", tu: "as battu", "il/elle": "a battu", nous: "avons battu", vous: "avez battu", "ils/elles": "ont battu" },
      imparfait: { je: "battais", tu: "battais", "il/elle": "battait", nous: "battions", vous: "battiez", "ils/elles": "battaient" },
      "plus-que-parfait": { je: "avais battu", tu: "avais battu", "il/elle": "avait battu", nous: "avions battu", vous: "aviez battu", "ils/elles": "avaient battu" },
    }
  },
  {
    id: 105,
    infinitive: "craindre",
    translation: "temer",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "craint",
    conjugations: {
      présent: { je: "crains", tu: "crains", "il/elle": "craint", nous: "craignons", vous: "craignez", "ils/elles": "craignent" },
      "passé composé": { je: "ai craint", tu: "as craint", "il/elle": "a craint", nous: "avons craint", vous: "avez craint", "ils/elles": "ont craint" },
      imparfait: { je: "craignais", tu: "craignais", "il/elle": "craignait", nous: "craignions", vous: "craigniez", "ils/elles": "craignaient" },
      "plus-que-parfait": { je: "avais craint", tu: "avais craint", "il/elle": "avait craint", nous: "avions craint", vous: "aviez craint", "ils/elles": "avaient craint" },
    }
  },
  {
    id: 106,
    infinitive: "joindre",
    translation: "unir",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "joint",
    conjugations: {
      présent: { je: "joins", tu: "joins", "il/elle": "joint", nous: "joignons", vous: "joignez", "ils/elles": "joignent" },
      "passé composé": { je: "ai joint", tu: "as joint", "il/elle": "a joint", nous: "avons joint", vous: "avez joint", "ils/elles": "ont joint" },
      imparfait: { je: "joignais", tu: "joignais", "il/elle": "joignait", nous: "joignions", vous: "joigniez", "ils/elles": "joignaient" },
      "plus-que-parfait": { je: "avais joint", tu: "avais joint", "il/elle": "avait joint", nous: "avions joint", vous: "aviez joint", "ils/elles": "avaient joint" },
    }
  },
  {
    id: 107,
    infinitive: "peindre",
    translation: "pintar",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "peint",
    conjugations: {
      présent: { je: "peins", tu: "peins", "il/elle": "peint", nous: "peignons", vous: "peignez", "ils/elles": "peignent" },
      "passé composé": { je: "ai peint", tu: "as peint", "il/elle": "a peint", nous: "avons peint", vous: "avez peint", "ils/elles": "ont peint" },
      imparfait: { je: "peignais", tu: "peignais", "il/elle": "peignait", nous: "peignions", vous: "peigniez", "ils/elles": "peignaient" },
      "plus-que-parfait": { je: "avais peint", tu: "avais peint", "il/elle": "avait peint", nous: "avions peint", vous: "aviez peint", "ils/elles": "avaient peint" },
    }
  },
  {
    id: 108,
    infinitive: "éteindre",
    translation: "apagar",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "éteint",
    conjugations: {
      présent: { je: "éteins", tu: "éteins", "il/elle": "éteint", nous: "éteignons", vous: "éteignez", "ils/elles": "éteignent" },
      "passé composé": { je: "ai éteint", tu: "as éteint", "il/elle": "a éteint", nous: "avons éteint", vous: "avez éteint", "ils/elles": "ont éteint" },
      imparfait: { je: "éteignais", tu: "éteignais", "il/elle": "éteignait", nous: "éteignions", vous: "éteigniez", "ils/elles": "éteignaient" },
      "plus-que-parfait": { je: "avais éteint", tu: "avais éteint", "il/elle": "avait éteint", nous: "avions éteint", vous: "aviez éteint", "ils/elles": "avaient éteint" }
    }
  },
  {
    id: 109,
    infinitive: "atteindre",
    translation: "alcanzar",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "atteint",
    conjugations: {
      présent: { je: "atteins", tu: "atteins", "il/elle": "atteint", nous: "atteignons", vous: "atteignez", "ils/elles": "atteignent" },
      "passé composé": { je: "ai atteint", tu: "as atteint", "il/elle": "a atteint", nous: "avons atteint", vous: "avez atteint", "ils/elles": "ont atteint" },
      imparfait: { je: "atteignais", tu: "atteignais", "il/elle": "atteignait", nous: "atteignions", vous: "atteigniez", "ils/elles": "atteignaient" },
      "plus-que-parfait": { je: "avais atteint", tu: "avais atteint", "il/elle": "avait atteint", nous: "avions atteint", vous: "aviez atteint", "ils/elles": "avaient atteint" }
    }
  },
  {
    id: 110,
    infinitive: "résoudre",
    translation: "resolver",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "résolu",
    conjugations: {
      présent: { je: "résous", tu: "résous", "il/elle": "résout", nous: "résolvons", vous: "résolvez", "ils/elles": "résolvent" },
      "passé composé": { je: "ai résolu", tu: "as résolu", "il/elle": "a résolu", nous: "avons résolu", vous: "avez résolu", "ils/elles": "ont résolu" },
      imparfait: { je: "résolvais", tu: "résolvais", "il/elle": "résolvait", nous: "résolvions", vous: "résolviez", "ils/elles": "résolvaient" },
      "plus-que-parfait": { je: "avais résolu", tu: "avais résolu", "il/elle": "avait résolu", nous: "avions résolu", vous: "aviez résolu", "ils/elles": "avaient résolu" },
    }
  },
  {
    id: 111,
    infinitive: "coudre",
    translation: "coser",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "cousu",
    conjugations: {
      présent: { je: "couds", tu: "couds", "il/elle": "coud", nous: "cousons", vous: "cousez", "ils/elles": "cousent" },
      "passé composé": { je: "ai cousu", tu: "as cousu", "il/elle": "a cousu", nous: "avons cousu", vous: "avez cousu", "ils/elles": "ont cousu" },
      imparfait: { je: "cousais", tu: "cousais", "il/elle": "cousait", nous: "cousions", vous: "cousiez", "ils/elles": "cousaient" },
      "plus-que-parfait": { je: "avais cousu", tu: "avais cousu", "il/elle": "avait cousu", nous: "avions cousu", vous: "aviez cousu", "ils/elles": "avaient cousu" },
    }
  },
  {
    id: 112,
    infinitive: "moudre",
    translation: "moler",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "moulu",
    conjugations: {
      présent: { je: "mouds", tu: "mouds", "il/elle": "moud", nous: "moulons", vous: "moulez", "ils/elles": "moulent" },
      "passé composé": { je: "ai moulu", tu: "as moulu", "il/elle": "a moulu", nous: "avons moulu", vous: "avez moulu", "ils/elles": "ont moulu" },
      imparfait: { je: "moulais", tu: "moulais", "il/elle": "moulait", nous: "moulions", vous: "mouliez", "ils/elles": "moulaient" },
      "plus-que-parfait": { je: "avais moulu", tu: "avais moulu", "il/elle": "avait moulu", nous: "avions moulu", vous: "aviez moulu", "ils/elles": "avaient moulu" },
    }
  },
  {
    id: 113,
    infinitive: "conclure",
    translation: "concluir",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "conclu",
    conjugations: {
      présent: { je: "conclus", tu: "conclus", "il/elle": "conclut", nous: "concluons", vous: "concluez", "ils/elles": "concluent" },
      "passé composé": { je: "ai conclu", tu: "as conclu", "il/elle": "a conclu", nous: "avons conclu", vous: "avez conclu", "ils/elles": "ont conclu" },
      imparfait: { je: "concluais", tu: "concluais", "il/elle": "concluait", nous: "concluions", vous: "concluiez", "ils/elles": "concluaient" },
      "plus-que-parfait": { je: "avais conclu", tu: "avais conclu", "il/elle": "avait conclu", nous: "avions conclu", vous: "aviez conclu", "ils/elles": "avaient conclu" },
    }
  },
  {
    id: 114,
    infinitive: "exclure",
    translation: "excluir",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "exclu",
    conjugations: {
      présent: { je: "exclus", tu: "exclus", "il/elle": "exclut", nous: "excluons", vous: "excluez", "ils/elles": "excluent" },
      "passé composé": { je: "ai exclu", tu: "as exclu", "il/elle": "a exclu", nous: "avons exclu", vous: "avez exclu", "ils/elles": "ont exclu" },
      imparfait: { je: "excluais", tu: "excluais", "il/elle": "excluait", nous: "excluions", vous: "excluiez", "ils/elles": "excluaient" },
      "plus-que-parfait": { je: "avais exclu", tu: "avais exclu", "il/elle": "avait exclu", nous: "avions exclu", vous: "aviez exclu", "ils/elles": "avaient exclu" }
    }
  },
  {
    id: 115,
    infinitive: "inclure",
    translation: "incluir",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "inclus",
    conjugations: {
      présent: { je: "inclus", tu: "inclus", "il/elle": "inclut", nous: "incluons", vous: "incluez", "ils/elles": "incluent" },
      "passé composé": { je: "ai inclus", tu: "as inclus", "il/elle": "a inclus", nous: "avons inclus", vous: "avez inclus", "ils/elles": "ont inclus" },
      imparfait: { je: "incluais", tu: "incluais", "il/elle": "incluait", nous: "incluions", vous: "incluiez", "ils/elles": "incluaient" },
      "plus-que-parfait": { je: "avais inclus", tu: "avais inclus", "il/elle": "avait inclus", nous: "avions inclus", vous: "aviez inclus", "ils/elles": "avaient inclus" }
    }
  },
  {
    id: 116,
    infinitive: "interrompre",
    translation: "interrumpir",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "interrompu",
    conjugations: {
      présent: { je: "interromps", tu: "interromps", "il/elle": "interrompt", nous: "interrompons", vous: "interrompez", "ils/elles": "interrompent" },
      "passé composé": { je: "ai interrompu", tu: "as interrompu", "il/elle": "a interrompu", nous: "avons interrompu", vous: "avez interrompu", "ils/elles": "ont interrompu" },
      imparfait: { je: "interrompais", tu: "interrompais", "il/elle": "interrompait", nous: "interrompions", vous: "interrompiez", "ils/elles": "interrompaient" },
      "plus-que-parfait": { je: "avais interrompu", tu: "avais interrompu", "il/elle": "avait interrompu", nous: "avions interrompu", vous: "aviez interrompu", "ils/elles": "avaient interrompu" }
    }
  },
  {
    id: 117,
    infinitive: "corrompre",
    translation: "corromper",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "corrompu",
    conjugations: {
      présent: { je: "corromps", tu: "corromps", "il/elle": "corrompt", nous: "corrompons", vous: "corrompez", "ils/elles": "corrompent" },
      "passé composé": { je: "ai corrompu", tu: "as corrompu", "il/elle": "a corrompu", nous: "avons corrompu", vous: "avez corrompu", "ils/elles": "ont corrompu" },
      imparfait: { je: "corrompais", tu: "corrompais", "il/elle": "corrompait", nous: "corrompions", vous: "corrompiez", "ils/elles": "corrompaient" },
      "plus-que-parfait": { je: "avais corrompu", tu: "avais corrompu", "il/elle": "avait corrompu", nous: "avions corrompu", vous: "aviez corrompu", "ils/elles": "avaient corrompu" }
    }
  },
  {
    id: 118,
    infinitive: "vaincre",
    translation: "vencer",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "vaincu",
    conjugations: {
      présent: { je: "vaincs", tu: "vaincs", "il/elle": "vainc", nous: "vainquons", vous: "vainquez", "ils/elles": "vainquent" },
      "passé composé": { je: "ai vaincu", tu: "as vaincu", "il/elle": "a vaincu", nous: "avons vaincu", vous: "avez vaincu", "ils/elles": "ont vaincu" },
      imparfait: { je: "vainquais", tu: "vainquais", "il/elle": "vainquait", nous: "vainquions", vous: "vainquiez", "ils/elles": "vainquaient" },
      "plus-que-parfait": { je: "avais vaincu", tu: "avais vaincu", "il/elle": "avait vaincu", nous: "avions vaincu", vous: "aviez vaincu", "ils/elles": "avaient vaincu" },
    }
  },
  {
    id: 119,
    infinitive: "convaincre",
    translation: "convencer",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "convaincu",
    conjugations: {
      présent: { je: "convaincs", tu: "convaincs", "il/elle": "convainc", nous: "convainquons", vous: "convainquez", "ils/elles": "convainquent" },
      "passé composé": { je: "ai convaincu", tu: "as convaincu", "il/elle": "a convaincu", nous: "avons convaincu", vous: "avez convaincu", "ils/elles": "ont convaincu" },
      imparfait: { je: "convainquais", tu: "convainquais", "il/elle": "convainquait", nous: "convainquions", vous: "convainquiez", "ils/elles": "convainquaient" },
      "plus-que-parfait": { je: "avais convaincu", tu: "avais convaincu", "il/elle": "avait convaincu", nous: "avions convaincu", vous: "aviez convaincu", "ils/elles": "avaient convaincu" }
    }
  },
  {
    id: 120,
    infinitive: "suffire",
    translation: "bastar",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "suffi",
    conjugations: {
      présent: { je: "suffis", tu: "suffis", "il/elle": "suffit", nous: "suffisons", vous: "suffisez", "ils/elles": "suffisent" },
      "passé composé": { je: "ai suffi", tu: "as suffi", "il/elle": "a suffi", nous: "avons suffi", vous: "avez suffi", "ils/elles": "ont suffi" },
      imparfait: { je: "suffisais", tu: "suffisais", "il/elle": "suffisait", nous: "suffisions", vous: "suffisiez", "ils/elles": "suffisaient" },
      "plus-que-parfait": { je: "avais suffi", tu: "avais suffi", "il/elle": "avait suffi", nous: "avions suffi", vous: "aviez suffi", "ils/elles": "avaient suffi" },
    }
  },
  {
    id: 121,
    infinitive: "cuire",
    translation: "cocinar",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "cuit",
    conjugations: {
      présent: { je: "cuis", tu: "cuis", "il/elle": "cuit", nous: "cuisons", vous: "cuisez", "ils/elles": "cuisent" },
      "passé composé": { je: "ai cuit", tu: "as cuit", "il/elle": "a cuit", nous: "avons cuit", vous: "avez cuit", "ils/elles": "ont cuit" },
      imparfait: { je: "cuisais", tu: "cuisais", "il/elle": "cuisait", nous: "cuisions", vous: "cuisiez", "ils/elles": "cuisaient" },
      "plus-que-parfait": { je: "avais cuit", tu: "avais cuit", "il/elle": "avait cuit", nous: "avions cuit", vous: "aviez cuit", "ils/elles": "avaient cuit" }
    }
  },
  {
    id: 122,
    infinitive: "nuire",
    translation: "perjudicar",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "nui",
    conjugations: {
      présent: { je: "nuis", tu: "nuis", "il/elle": "nuit", nous: "nuisons", vous: "nuisez", "ils/elles": "nuisent" },
      "passé composé": { je: "ai nui", tu: "as nui", "il/elle": "a nui", nous: "avons nui", vous: "avez nui", "ils/elles": "ont nui" },
      imparfait: { je: "nuisais", tu: "nuisais", "il/elle": "nuisait", nous: "nuisions", vous: "nuisiez", "ils/elles": "nuisaient" },
      "plus-que-parfait": { je: "avais nui", tu: "avais nui", "il/elle": "avait nui", nous: "avions nui", vous: "aviez nui", "ils/elles": "avaient nui" }
    }
  },
  {
    id: 123,
    infinitive: "fuir",
    translation: "huir",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "fui",
    conjugations: {
      présent: { je: "fuis", tu: "fuis", "il/elle": "fuit", nous: "fuyons", vous: "fuyez", "ils/elles": "fuient" },
      "passé composé": { je: "ai fui", tu: "as fui", "il/elle": "a fui", nous: "avons fui", vous: "avez fui", "ils/elles": "ont fui" },
      imparfait: { je: "fuyais", tu: "fuyais", "il/elle": "fuyait", nous: "fuyions", vous: "fuyiez", "ils/elles": "fuyaient" },
      "plus-que-parfait": { je: "avais fui", tu: "avais fui", "il/elle": "avait fui", nous: "avions fui", vous: "aviez fui", "ils/elles": "avaient fui" },
    }
  },
  {
    id: 124,
    infinitive: "falloir",
    translation: "ser necesario",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "fallu",
    conjugations: {
      présent: { je: "-", tu: "-", "il/elle": "faut", nous: "-", vous: "-", "ils/elles": "-" },
      "passé composé": { je: "-", tu: "-", "il/elle": "a fallu", nous: "-", vous: "-", "ils/elles": "-" },
      imparfait: { je: "-", tu: "-", "il/elle": "fallait", nous: "-", vous: "-", "ils/elles": "-" },
      "plus-que-parfait": { je: "avais fallu", tu: "avais fallu", "il/elle": "avait fallu", nous: "avions fallu", vous: "aviez fallu", "ils/elles": "avaient fallu" },
    }
  },
  {
    id: 125,
    infinitive: "pleuvoir",
    translation: "llover",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "plu",
    conjugations: {
      présent: { je: "-", tu: "-", "il/elle": "pleut", nous: "-", vous: "-", "ils/elles": "-" },
      "passé composé": { je: "-", tu: "-", "il/elle": "a plu", nous: "-", vous: "-", "ils/elles": "-" },
      imparfait: { je: "-", tu: "-", "il/elle": "pleuvait", nous: "-", vous: "-", "ils/elles": "-" },
      "plus-que-parfait": { je: "-", tu: "-", "il/elle": "avait plu", nous: "-", vous: "-", "ils/elles": "-" },
    }
  },
  {
    id: 126,
    infinitive: "valoir",
    translation: "valer",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "valu",
    conjugations: {
      présent: { je: "vaux", tu: "vaux", "il/elle": "vaut", nous: "valons", vous: "valez", "ils/elles": "valent" },
      "passé composé": { je: "ai valu", tu: "as valu", "il/elle": "a valu", nous: "avons valu", vous: "avez valu", "ils/elles": "ont valu" },
      imparfait: { je: "valais", tu: "valais", "il/elle": "valait", nous: "valions", vous: "valiez", "ils/elles": "valaient" },
      "plus-que-parfait": { je: "avais valu", tu: "avais valu", "il/elle": "avait valu", nous: "avions valu", vous: "aviez valu", "ils/elles": "avaient valu" },
    }
  },
  {
    id: 127,
    infinitive: "asseoir",
    translation: "sentar",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "assis",
    conjugations: {
      présent: { je: "assieds", tu: "assieds", "il/elle": "assied", nous: "asseyons", vous: "asseyez", "ils/elles": "asseyent" },
      "passé composé": { je: "ai assis", tu: "as assis", "il/elle": "a assis", nous: "avons assis", vous: "avez assis", "ils/elles": "ont assis" },
      imparfait: { je: "asseyais", tu: "asseyais", "il/elle": "asseyait", nous: "asseyions", vous: "asseyiez", "ils/elles": "asseyaient" },
      "plus-que-parfait": { je: "avais assis", tu: "avais assis", "il/elle": "avait assis", nous: "avions assis", vous: "aviez assis", "ils/elles": "avaient assis" }
    }
  },
  {
    id: 128,
    infinitive: "acquérir",
    translation: "adquirir",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "acquis",
    conjugations: {
      présent: { je: "acquiers", tu: "acquiers", "il/elle": "acquiert", nous: "acquérons", vous: "acquérez", "ils/elles": "acquièrent" },
      "passé composé": { je: "ai acquis", tu: "as acquis", "il/elle": "a acquis", nous: "avons acquis", vous: "avez acquis", "ils/elles": "ont acquis" },
      imparfait: { je: "acquérais", tu: "acquérais", "il/elle": "acquérait", nous: "acquérions", vous: "acquériez", "ils/elles": "acquéraient" },
      "plus-que-parfait": { je: "avais acquis", tu: "avais acquis", "il/elle": "avait acquis", nous: "avions acquis", vous: "aviez acquis", "ils/elles": "avaient acquis" },
    }
  },
  {
    id: 129,
    infinitive: "cueillir",
    translation: "recoger",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "cueilli",
    conjugations: {
      présent: { je: "cueille", tu: "cueilles", "il/elle": "cueille", nous: "cueillons", vous: "cueillez", "ils/elles": "cueillent" },
      "passé composé": { je: "ai cueilli", tu: "as cueilli", "il/elle": "a cueilli", nous: "avons cueilli", vous: "avez cueilli", "ils/elles": "ont cueilli" },
      imparfait: { je: "cueillais", tu: "cueillais", "il/elle": "cueillait", nous: "cueillions", vous: "cueilliez", "ils/elles": "cueillaient" },
      "plus-que-parfait": { je: "avais cueilli", tu: "avais cueilli", "il/elle": "avait cueilli", nous: "avions cueilli", vous: "aviez cueilli", "ils/elles": "avaient cueilli" },
    }
  },
  {
    id: 130,
    infinitive: "bouillir",
    translation: "hervir",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "bouilli",
    conjugations: {
      présent: { je: "bous", tu: "bous", "il/elle": "bout", nous: "bouillons", vous: "bouillez", "ils/elles": "bouillent" },
      "passé composé": { je: "ai bouilli", tu: "as bouilli", "il/elle": "a bouilli", nous: "avons bouilli", vous: "avez bouilli", "ils/elles": "ont bouilli" },
      imparfait: { je: "bouillais", tu: "bouillais", "il/elle": "bouillait", nous: "bouillions", vous: "bouilliez", "ils/elles": "bouillaient" },
      "plus-que-parfait": { je: "avais bouilli", tu: "avais bouilli", "il/elle": "avait bouilli", nous: "avions bouilli", vous: "aviez bouilli", "ils/elles": "avaient bouilli" },
    }
  },
  {
    id: 131,
    infinitive: "couvrir",
    translation: "cubrir",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "couvert",
    conjugations: {
      présent: { je: "couvre", tu: "couvres", "il/elle": "couvre", nous: "couvrons", vous: "couvrez", "ils/elles": "couvrent" },
      "passé composé": { je: "ai couvert", tu: "as couvert", "il/elle": "a couvert", nous: "avons couvert", vous: "avez couvert", "ils/elles": "ont couvert" },
      imparfait: { je: "couvrais", tu: "couvrais", "il/elle": "couvrait", nous: "couvrions", vous: "couvriez", "ils/elles": "couvraient" },
      "plus-que-parfait": { je: "avais couvert", tu: "avais couvert", "il/elle": "avait couvert", nous: "avions couvert", vous: "aviez couvert", "ils/elles": "avaient couvert" },
    }
  },
  {
    id: 132,
    infinitive: "découvrir",
    translation: "descubrir",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "découvert",
    conjugations: {
      présent: { je: "découvre", tu: "découvres", "il/elle": "découvre", nous: "découvrons", vous: "découvrez", "ils/elles": "découvrent" },
      "passé composé": { je: "ai découvert", tu: "as découvert", "il/elle": "a découvert", nous: "avons découvert", vous: "avez découvert", "ils/elles": "ont découvert" },
      imparfait: { je: "découvrais", tu: "découvrais", "il/elle": "découvrait", nous: "découvrions", vous: "découvriez", "ils/elles": "découvraient" },
      "plus-que-parfait": { je: "avais découvert", tu: "avais découvert", "il/elle": "avait découvert", nous: "avions découvert", vous: "aviez découvert", "ils/elles": "avaient découvert" },
    }
  },
  {
    id: 133,
    infinitive: "souffrir",
    translation: "sufrir",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "souffert",
    conjugations: {
      présent: { je: "souffre", tu: "souffres", "il/elle": "souffre", nous: "souffrons", vous: "souffrez", "ils/elles": "souffrent" },
      "passé composé": { je: "ai souffert", tu: "as souffert", "il/elle": "a souffert", nous: "avons souffert", vous: "avez souffert", "ils/elles": "ont souffert" },
      imparfait: { je: "souffrais", tu: "souffrais", "il/elle": "souffrait", nous: "souffrions", vous: "souffriez", "ils/elles": "souffraient" },
      "plus-que-parfait": { je: "avais souffert", tu: "avais souffert", "il/elle": "avait souffert", nous: "avions souffert", vous: "aviez souffert", "ils/elles": "avaient souffert" },
    }
  },
  {
    id: 134,
    infinitive: "mentir",
    translation: "mentir",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "menti",
    conjugations: {
      présent: { je: "mens", tu: "mens", "il/elle": "ment", nous: "mentons", vous: "mentez", "ils/elles": "mentent" },
      "passé composé": { je: "ai menti", tu: "as menti", "il/elle": "a menti", nous: "avons menti", vous: "avez menti", "ils/elles": "ont menti" },
      imparfait: { je: "mentais", tu: "mentais", "il/elle": "mentait", nous: "mentions", vous: "mentiez", "ils/elles": "mentaient" },
      "plus-que-parfait": { je: "avais menti", tu: "avais menti", "il/elle": "avait menti", nous: "avions menti", vous: "aviez menti", "ils/elles": "avaient menti" },
    }
  },
  {
    id: 135,
    infinitive: "consentir",
    translation: "consentir",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "consenti",
    conjugations: {
      présent: { je: "consens", tu: "consens", "il/elle": "consent", nous: "consentons", vous: "consentez", "ils/elles": "consentent" },
      "passé composé": { je: "ai consenti", tu: "as consenti", "il/elle": "a consenti", nous: "avons consenti", vous: "avez consenti", "ils/elles": "ont consenti" },
      imparfait: { je: "consentais", tu: "consentais", "il/elle": "consentait", nous: "consentions", vous: "consentiez", "ils/elles": "consentaient" },
      "plus-que-parfait": { je: "avais consenti", tu: "avais consenti", "il/elle": "avait consenti", nous: "avions consenti", vous: "aviez consenti", "ils/elles": "avaient consenti" }
    }
  },
  {
    id: 136,
    infinitive: "ressentir",
    translation: "sentir",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "ressenti",
    conjugations: {
      présent: { je: "ressens", tu: "ressens", "il/elle": "ressent", nous: "ressentons", vous: "ressentez", "ils/elles": "ressentent" },
      "passé composé": { je: "ai ressenti", tu: "as ressenti", "il/elle": "a ressenti", nous: "avons ressenti", vous: "avez ressenti", "ils/elles": "ont ressenti" },
      imparfait: { je: "ressentais", tu: "ressentais", "il/elle": "ressentait", nous: "ressentions", vous: "ressentiez", "ils/elles": "ressentaient" },
      "plus-que-parfait": { je: "avais ressenti", tu: "avais ressenti", "il/elle": "avait ressenti", nous: "avions ressenti", vous: "aviez ressenti", "ils/elles": "avaient ressenti" }
    }
  },
  {
    id: 137,
    infinitive: "appartenir",
    translation: "pertenecer",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "appartenu",
    conjugations: {
      présent: { je: "appartiens", tu: "appartiens", "il/elle": "appartient", nous: "appartenons", vous: "appartenez", "ils/elles": "appartiennent" },
      "passé composé": { je: "ai appartenu", tu: "as appartenu", "il/elle": "a appartenu", nous: "avons appartenu", vous: "avez appartenu", "ils/elles": "ont appartenu" },
      imparfait: { je: "appartenais", tu: "appartenais", "il/elle": "appartenait", nous: "appartenions", vous: "apparteniez", "ils/elles": "appartenaient" },
      "plus-que-parfait": { je: "avais appartenu", tu: "avais appartenu", "il/elle": "avait appartenu", nous: "avions appartenu", vous: "aviez appartenu", "ils/elles": "avaient appartenu" },
    }
  },
  {
    id: 138,
    infinitive: "obtenir",
    translation: "obtener",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "obtenu",
    conjugations: {
      présent: { je: "obtiens", tu: "obtiens", "il/elle": "obtient", nous: "obtenons", vous: "obtenez", "ils/elles": "obtiennent" },
      "passé composé": { je: "ai obtenu", tu: "as obtenu", "il/elle": "a obtenu", nous: "avons obtenu", vous: "avez obtenu", "ils/elles": "ont obtenu" },
      imparfait: { je: "obtenais", tu: "obtenais", "il/elle": "obtenait", nous: "obtenions", vous: "obteniez", "ils/elles": "obtenaient" },
      "plus-que-parfait": { je: "avais obtenu", tu: "avais obtenu", "il/elle": "avait obtenu", nous: "avions obtenu", vous: "aviez obtenu", "ils/elles": "avaient obtenu" },
    }
  },
  {
    id: 139,
    infinitive: "retenir",
    translation: "retener",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "retenu",
    conjugations: {
      présent: { je: "retiens", tu: "retiens", "il/elle": "retient", nous: "retenons", vous: "retenez", "ils/elles": "retiennent" },
      "passé composé": { je: "ai retenu", tu: "as retenu", "il/elle": "a retenu", nous: "avons retenu", vous: "avez retenu", "ils/elles": "ont retenu" },
      imparfait: { je: "retenais", tu: "retenais", "il/elle": "retenait", nous: "retenions", vous: "reteniez", "ils/elles": "retenaient" },
      "plus-que-parfait": { je: "avais retenu", tu: "avais retenu", "il/elle": "avait retenu", nous: "avions retenu", vous: "aviez retenu", "ils/elles": "avaient retenu" }
    }
  },
  {
    id: 140,
    infinitive: "soutenir",
    translation: "sostener",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "soutenu",
    conjugations: {
      présent: { je: "soutiens", tu: "soutiens", "il/elle": "soutient", nous: "soutenons", vous: "soutenez", "ils/elles": "soutiennent" },
      "passé composé": { je: "ai soutenu", tu: "as soutenu", "il/elle": "a soutenu", nous: "avons soutenu", vous: "avez soutenu", "ils/elles": "ont soutenu" },
      imparfait: { je: "soutenais", tu: "soutenais", "il/elle": "soutenait", nous: "soutenions", vous: "souteniez", "ils/elles": "soutenaient" },
      "plus-que-parfait": { je: "avais soutenu", tu: "avais soutenu", "il/elle": "avait soutenu", nous: "avions soutenu", vous: "aviez soutenu", "ils/elles": "avaient soutenu" }
    }
  },
  {
    id: 141,
    infinitive: "maintenir",
    translation: "mantener",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "maintenu",
    conjugations: {
      présent: { je: "maintiens", tu: "maintiens", "il/elle": "maintient", nous: "maintenons", vous: "maintenez", "ils/elles": "maintiennent" },
      "passé composé": { je: "ai maintenu", tu: "as maintenu", "il/elle": "a maintenu", nous: "avons maintenu", vous: "avez maintenu", "ils/elles": "ont maintenu" },
      imparfait: { je: "maintenais", tu: "maintenais", "il/elle": "maintenait", nous: "maintenions", vous: "mainteniez", "ils/elles": "maintenaient" },
      "plus-que-parfait": { je: "avais maintenu", tu: "avais maintenu", "il/elle": "avait maintenu", nous: "avions maintenu", vous: "aviez maintenu", "ils/elles": "avaient maintenu" }
    }
  },
  {
    id: 142,
    infinitive: "prévenir",
    translation: "prevenir",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "prévenu",
    conjugations: {
      présent: { je: "préviens", tu: "préviens", "il/elle": "prévient", nous: "prévenons", vous: "prévenez", "ils/elles": "préviennent" },
      "passé composé": { je: "ai prévenu", tu: "as prévenu", "il/elle": "a prévenu", nous: "avons prévenu", vous: "avez prévenu", "ils/elles": "ont prévenu" },
      imparfait: { je: "prévenais", tu: "prévenais", "il/elle": "prévenait", nous: "prévenions", vous: "préveniez", "ils/elles": "prévenaient" },
      "plus-que-parfait": { je: "avais prévenu", tu: "avais prévenu", "il/elle": "avait prévenu", nous: "avions prévenu", vous: "aviez prévenu", "ils/elles": "avaient prévenu" }
    }
  },
  {
    id: 143,
    infinitive: "se souvenir",
    translation: "acordarse",
    type: "irregular",
    group: 3,
    auxiliaire: "être",
    participe: "souvenu",
    conjugations: {
      présent: { je: "me souviens", tu: "te souviens", "il/elle": "se souvient", nous: "nous souvenons", vous: "vous souvenez", "ils/elles": "se souviennent" },
      "passé composé": { je: "me suis souvenu(e)", tu: "t'es souvenu(e)", "il/elle": "s'est souvenu(e)", nous: "nous sommes souvenu(e)s", vous: "vous êtes souvenu(e)(s)", "ils/elles": "se sont souvenu(e)s" },
      imparfait: { je: "me souvenais", tu: "te souvenais", "il/elle": "se souvenait", nous: "nous souvenions", vous: "vous souveniez", "ils/elles": "se souvenaient" },
      "plus-que-parfait": { je: "m'étais souvenu(e)", tu: "t'étais souvenu(e)", "il/elle": "s'était souvenu(e)", nous: "nous étions souvenu(e)s", vous: "vous étiez souvenu(e)(s)", "ils/elles": "se étaient souvenu(e)s" },
    }
  },
  {
    id: 144,
    infinitive: "prévoir",
    translation: "prever",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "prévu",
    conjugations: {
      présent: { je: "prévois", tu: "prévois", "il/elle": "prévoit", nous: "prévoyons", vous: "prévoyez", "ils/elles": "prévoient" },
      "passé composé": { je: "ai prévu", tu: "as prévu", "il/elle": "a prévu", nous: "avons prévu", vous: "avez prévu", "ils/elles": "ont prévu" },
      imparfait: { je: "prévoyais", tu: "prévoyais", "il/elle": "prévoyait", nous: "prévoyions", vous: "prévoyiez", "ils/elles": "prévoyaient" },
      "plus-que-parfait": { je: "avais prévu", tu: "avais prévu", "il/elle": "avait prévu", nous: "avions prévu", vous: "aviez prévu", "ils/elles": "avaient prévu" }
    }
  },
  {
    id: 145,
    infinitive: "revoir",
    translation: "volver a ver",
    type: "irregular",
    group: 3,
    auxiliaire: "avoir",
    participe: "revu",
    conjugations: {
      présent: { je: "revois", tu: "revois", "il/elle": "revoit", nous: "revoyons", vous: "revoyez", "ils/elles": "revoient" },
      "passé composé": { je: "ai revu", tu: "as revu", "il/elle": "a revu", nous: "avons revu", vous: "avez revu", "ils/elles": "ont revu" },
      imparfait: { je: "revoyais", tu: "revoyais", "il/elle": "revoyait", nous: "revoyions", vous: "revoyiez", "ils/elles": "revoyaient" },
      "plus-que-parfait": { je: "avais revu", tu: "avais revu", "il/elle": "avait revu", nous: "avions revu", vous: "aviez revu", "ils/elles": "avaient revu" }
    }
  },
  {
    id: 146,
    infinitive: "s'asseoir",
    translation: "sentarse",
    type: "irregular",
    group: 3,
    auxiliaire: "être",
    participe: "assis",
    conjugations: {
      présent: { je: "m'assieds", tu: "t'assieds", "il/elle": "s'assied", nous: "nous asseyons", vous: "vous asseyez", "ils/elles": "s'asseyent" },
      "passé composé": { je: "me suis assis(e)", tu: "t'es assis(e)", "il/elle": "s'est assis(e)", nous: "nous sommes assis(es)", vous: "vous êtes assis(e)(s)", "ils/elles": "se sont assis(es)" },
      imparfait: { je: "m'asseyais", tu: "t'asseyais", "il/elle": "s'asseyait", nous: "nous asseyions", vous: "vous asseyiez", "ils/elles": "s'asseyaient" },
      "plus-que-parfait": { je: "m'étais assis(e)", tu: "t'étais assis(e)", "il/elle": "s'était assis(e)", nous: "nous étions assis(e)s", vous: "vous étiez assis(e)(s)", "ils/elles": "se étaient assis(e)s" },
    }
  },
  {
    id: 147,
    infinitive: "se lever",
    translation: "levantarse",
    type: "regular",
    group: 1,
    auxiliaire: "être",
    participe: "levé",
    conjugations: {
      présent: { je: "me lève", tu: "te lèves", "il/elle": "se lève", nous: "nous levons", vous: "vous levez", "ils/elles": "se lèvent" },
      "passé composé": { je: "me suis levé(e)", tu: "t'es levé(e)", "il/elle": "s'est levé(e)", nous: "nous sommes levé(e)s", vous: "vous êtes levé(e)(s)", "ils/elles": "se sont levé(e)s" },
      imparfait: { je: "me levais", tu: "te levais", "il/elle": "se levait", nous: "nous levions", vous: "vous leviez", "ils/elles": "se levaient" },
      "plus-que-parfait": { je: "m'étais levé(e)", tu: "t'étais levé(e)", "il/elle": "s'était levé(e)", nous: "nous étions levé(e)s", vous: "vous étiez levé(e)(s)", "ils/elles": "se étaient levé(e)s" }
    }
  },
  {
    id: 148,
    infinitive: "se coucher",
    translation: "acostarse",
    type: "regular",
    group: 1,
    auxiliaire: "être",
    participe: "couché",
    conjugations: {
      présent: { je: "me couche", tu: "te couches", "il/elle": "se couche", nous: "nous couchons", vous: "vous couchez", "ils/elles": "se couchent" },
      "passé composé": { je: "me suis couché(e)", tu: "t'es couché(e)", "il/elle": "s'est couché(e)", nous: "nous sommes couché(e)s", vous: "vous êtes couché(e)(s)", "ils/elles": "se sont couché(e)s" },
      imparfait: { je: "me couchais", tu: "te couchais", "il/elle": "se couchait", nous: "nous couchions", vous: "vous couchiez", "ils/elles": "se couchaient" },
      "plus-que-parfait": { je: "m'étais couché(e)", tu: "t'étais couché(e)", "il/elle": "s'était couché(e)", nous: "nous étions couché(e)s", vous: "vous étiez couché(e)(s)", "ils/elles": "se étaient couché(e)s" }
    }
  },
  {
    id: 149,
    infinitive: "se laver",
    translation: "lavarse",
    type: "regular",
    group: 1,
    auxiliaire: "être",
    participe: "lavé",
    conjugations: {
      présent: { je: "me lave", tu: "te laves", "il/elle": "se lave", nous: "nous lavons", vous: "vous lavez", "ils/elles": "se lavent" },
      "passé composé": { je: "me suis lavé(e)", tu: "t'es lavé(e)", "il/elle": "s'est lavé(e)", nous: "nous sommes lavé(e)s", vous: "vous êtes lavé(e)(s)", "ils/elles": "se sont lavé(e)s" },
      imparfait: { je: "me lavais", tu: "te lavais", "il/elle": "se lavait", nous: "nous lavions", vous: "vous laviez", "ils/elles": "se lavaient" },
      "plus-que-parfait": { je: "m'étais lavé(e)", tu: "t'étais lavé(e)", "il/elle": "s'était lavé(e)", nous: "nous étions lavé(e)s", vous: "vous étiez lavé(e)(s)", "ils/elles": "se étaient lavé(e)s" }
    }
  },
  {
    id: 150,
    infinitive: "s'habiller",
    translation: "vestirse",
    type: "regular",
    group: 1,
    auxiliaire: "être",
    participe: "habillé",
    conjugations: {
      présent: { je: "m'habille", tu: "t'habilles", "il/elle": "s'habille", nous: "nous habillons", vous: "vous habillez", "ils/elles": "s'habillent" },
      "passé composé": { je: "me suis habillé(e)", tu: "t'es habillé(e)", "il/elle": "s'est habillé(e)", nous: "nous sommes habillé(e)s", vous: "vous êtes habillé(e)(s)", "ils/elles": "se sont habillé(e)s" },
      imparfait: { je: "m'habillais", tu: "t'habillais", "il/elle": "s'habillait", nous: "nous habillions", vous: "vous habilliez", "ils/elles": "s'habillaient" },
      "plus-que-parfait": { je: "m'étais habillé(e)", tu: "t'étais habillé(e)", "il/elle": "s'était habillé(e)", nous: "nous étions habillé(e)s", vous: "vous étiez habillé(e)(s)", "ils/elles": "se étaient habillé(e)s" }
    }
  }
];

export function getRandomVerb(): Verb {
  const filteredVerbs = frenchVerbs.filter(v => v.conjugations.présent.je !== "-");
  return filteredVerbs[Math.floor(Math.random() * filteredVerbs.length)];
}

export function getRandomVerbs(count: number): Verb[] {
  const filteredVerbs = frenchVerbs.filter(v => v.conjugations.présent.je !== "-");
  const shuffled = [...filteredVerbs].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, filteredVerbs.length));
}
