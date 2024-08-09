"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactQuery from "./components/tanstackQuery/Query";
import { useState } from "react";
import RenderHtml from "./components/htmlparser/RenderHtml";

export default function Home() {
  const data = [
    {
      id: "001444c9-e856-4188-a919-6b2990013c91",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p> kpd;dZ fopT Nkyhz;ikf;fhd rpwg;G ikak; njhlq;fg;gl;l ,lk; vJ?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "36f19b1b-5bc3-464c-ac33-6991fe24f63f",
          choiceTranslationList: [
            {
              choiceField: "C-MET, Kk;ig",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "377e6ab5-6abf-4380-9e2b-2acb1325bcaf",
          choiceTranslationList: [
            {
              choiceField: "C-MET, GNd",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "708c4597-6b68-4e1c-b037-32620ac2f69b",
          choiceTranslationList: [
            {
              choiceField: "C-MET, i`juhghj",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "898926ea-8d43-4ccb-a455-8a4c62f5b4d4",
          choiceTranslationList: [
            {
              choiceField: "C-MET, nfhy;fj;jh",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [1],
    },
    {
      id: "0297b8b9-b7d8-499e-89bb-dfe7e336073a",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p> 2024-2025 epjpahz;Lf;fhd gl;n[l;by; kjpg;gplg;gl;l nkhj;j nryT vt;tsT?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "202e4cf5-1c1d-4f5e-a70a-c2a3dde40125",
          choiceTranslationList: [
            {
              choiceField: "49.16 ,yl;rk; Nfhb",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "386d38e8-67eb-4d69-bac6-4ea021bddc6c",
          choiceTranslationList: [
            {
              choiceField: "46.15 ,yl;rk; Nfhb",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "7c5bb3ff-f27d-4cf6-b009-b1865c628b8a",
          choiceTranslationList: [
            {
              choiceField: "47.66 ,yl;rk; Nfhb",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "bcbd65e8-b768-4f0e-a1ec-a90537cf6f55",
          choiceTranslationList: [
            {
              choiceField: "45.15 ,yl;rk; Nfhb",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [1],
    },
    {
      id: "04d1e08e-c808-4014-97c4-ccf9118384ef",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>cyf ePbj;j tsh;r;rp cr;rp khehL gw;wpa $w;Wfspy; vJ cz;ikay;y? </br> 1. Mz;LNjhWk; Mw;wy; kw;Wk; ts epWtdk; elj;JfpwJ </br> 2. 2024 Mz;Lf;fhd fUg;nghUs;: ‘Leadership for the Sustainable Development and Climate Justice’</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "070bef2b-3a82-440b-a30e-8b64db088398",
          choiceTranslationList: [
            {
              choiceField: "2 kl;Lk",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "58e10020-bc3f-4a3a-b82f-20e941140bc3",
          choiceTranslationList: [
            {
              choiceField: "1> 2",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "934d4672-87e4-4185-8b1c-a194fce8efdd",
          choiceTranslationList: [
            {
              choiceField: "vJTkpy;iy",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "dd9e0eb6-237c-41e3-905e-6c3184c03a84",
          choiceTranslationList: [
            {
              choiceField: "1 kl;Lk",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [2],
    },
    {
      id: "09f2cc54-fc3e-449a-99e0-8a7c55f461de",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p> fOF Fwpj;j fzf;nfLg;Gfspy; vJ cz;ik? </br> 1. Nfush kw;Wk; fh;ehlfh xUq;fpizg;Gld; jkpo;ehL tdj;Jiwapd; 2tJ xUq;fpize;j fzf;nfLg;gpd;gb ,g;gwitfspd; vz;zpf;if 246 MFk;. </br> 2. fOFfspd; vz;zpf;if Fiwtjw;F fhuzk; ‘nlf;Nsh/ngdh” vDk; fhy;eil kUj;Jtj;jpy; gad;gLk; kUe;jhFk;. </br> 3. ,we;j fhy;eilfis fOFfs; ,iuahf;fp nfhs;Sk; NghJ kUe;J fOFfspd; clypy; fye;J tpLfpwJ. </br> 4. ,e;jpahtpy; jkpo;ehl;by; nts;spepwg;gUe;Jfs;> rptg;Gj;jiy gUe;Jfs;> ePs%f;F fOFfs;> vfpg;jpa gUe;Jfs; vd 4 ,dq;fs; </p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "4e439c97-964a-4d0f-b7d4-222ef1cc5677",
          choiceTranslationList: [
            {
              choiceField: "1> 2 rhp",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "74d9623e-c57a-44f4-b193-fc7553dc0ac8",
          choiceTranslationList: [
            {
              choiceField: "2> 3 rhp ",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "91b6e647-9c97-44ab-924b-b19f60f6ca87",
          choiceTranslationList: [
            {
              choiceField: "midj;Jk; rh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "a5bdbc84-c461-4d11-9871-d4afe1c17689",
          choiceTranslationList: [
            {
              choiceField: "1> 2> 3 rh",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [2],
    },
    {
      id: "1a07080d-b858-409f-991a-1166f7b52fba",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>ghuj uj;dh gw;wpa $w;Wfspy; vJ cz;ik? </br> 1. elg;G 2024-y; ItUf;F ‘,e;jpa khkzp” tpUJ toq;fg;gl;lJ. </br> 3. 1955-y; Kjd;Kiwahf ghuj uj;dh toq;fg;gl;lJ.</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "0d416398-d17f-4ddf-a6fa-6f0f37652a02",
          choiceTranslationList: [
            {
              choiceField: "1> 3 kl;Lk; rhp",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "1df3cc0d-4409-4b86-8165-083a3efaf87d",
          choiceTranslationList: [
            {
              choiceField: "1> 2 kl;Lk; rhp",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "b212823c-438f-467a-a459-273830bded8d",
          choiceTranslationList: [
            {
              choiceField: "1> 2> 3 rh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "c75bc3e6-6272-4a7a-ae19-b65a8dc998ea",
          choiceTranslationList: [
            {
              choiceField: "1 kl;Lk; rhp",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [0],
    },
    {
      id: "1a55ecb5-1f17-418f-bdc4-9f1a3f202b8d",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField: "<p>SAMARTH jpl;lj;jpd; Kjd;ik Nehf;fk;?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "14ccedd8-725d-406e-8d57-852a7c7f8688",
          choiceTranslationList: [
            {
              choiceField: "fpuhkg;Gw khzth;fspd; cah;fy;tpf;F cjTjy",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "1abcee24-09a8-441d-b4f7-9d59f79b6ddb",
          choiceTranslationList: [
            {
              choiceField: "MSME fSf;F cjTjy",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "1aec6f15-90d9-41dc-8a9e-cd06304b5e15",
          choiceTranslationList: [
            {
              choiceField: "coth;fSf;F cjTjy;",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "7e42fb72-af16-4b6f-9ae7-d06128b4bfd7",
          choiceTranslationList: [
            {
              choiceField: "ngz;fSf;F tphpthd kUj;Jtj;ij toq;Fjy",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [1],
    },
    {
      id: "1ad2f0dc-83f5-410a-ac6f-d677c3c8173f",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>je;ij nghpahh; td tpyq;F ruzhyak; mike;Js;s khtl;lk</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "2623fc81-96ab-45f9-b576-f252e5e438f0",
          choiceTranslationList: [
            {
              choiceField: "jpUg;G+h",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "3fed6ea4-38cc-47a0-a218-bd653131a6c5",
          choiceTranslationList: [
            {
              choiceField: "Nfhit",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "9967ac2c-58ab-4288-a9a8-5dbcd7500fa1",
          choiceTranslationList: [
            {
              choiceField: "Nryk",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "99e95cb7-acbd-4f84-a168-4219923afac1",
          choiceTranslationList: [
            {
              choiceField: "<NuhL",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [1],
    },
    {
      id: "1be93070-ee84-45d2-9f11-a20bf8ddf302",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField: "<p>‘INS re;jhaf;” vd;gJ vd;d tifahd fg;gy;?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "4bfc9077-f278-4cc3-a5a5-5f5acdd4fd27",
          choiceTranslationList: [
            {
              choiceField: "jhf;fpaopg;ghd",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "bd411a76-dc57-4898-8fcc-82f115417183",
          choiceTranslationList: [
            {
              choiceField: "tpkhd jhq;fp fg;gy",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "bdb32279-bf5f-4011-b68e-c9816f34cd06",
          choiceTranslationList: [
            {
              choiceField: "Nuhe;J fg;gy",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "eb05c21e-6c53-4c41-b1bb-b923e433059a",
          choiceTranslationList: [
            {
              choiceField: "Ma;Tf; fg;gy",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [0],
    },
    {
      id: "1c1de57e-8dac-4097-ab81-7fefc613b4b4",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p> GJ nly;ypapy; 2024-y; eilngw;w cyf Gj;jf fz;fhl;rp njhlh;ghd $w;Wfspy; vJ rhpahdJ? </br> 1. fUg;nghUs; Multilingual India A Living Tradition </br> 2. ,e;j epfo;tpy; nfsut tpUe;jpdh;: If;fpa muG mkpufk;</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "76cd3fcf-2d29-4d73-b5c7-bbdde81b5edb",
          choiceTranslationList: [
            {
              choiceField: "2 kl;Lk",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "88658ab2-c31a-4d2b-aa30-f58ac5111952",
          choiceTranslationList: [
            {
              choiceField: "1 kl;Lk",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "aa11fcdf-11cf-47f7-88a0-34d6e3790f95",
          choiceTranslationList: [
            {
              choiceField: ",uz;Lk; rhpay;y",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "e46f979b-9072-4e55-b5e2-b1d215dc9905",
          choiceTranslationList: [
            {
              choiceField: "1>2 rhp",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [3],
    },
    {
      id: "2275aa36-ebc5-4017-af0c-6c267c9fd6cb",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>Njrpa jla mwptpay; gy;fiyf; fofk; mike;Js;s ,lk</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "3548e001-2a39-4abd-a3ad-3894e319d864",
          choiceTranslationList: [
            {
              choiceField: "Nghghy",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "7e66a215-fa78-4bd6-94c5-eed9a827d22f",
          choiceTranslationList: [
            {
              choiceField: "GJnly;y",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "b9244b96-0646-442d-b971-a407476348a5",
          choiceTranslationList: [
            {
              choiceField: "fhe;jp efh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "d71541cb-054a-4a98-a406-6279c0c3fca4",
          choiceTranslationList: [
            {
              choiceField: "yf;Ndh",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [3],
    },
    {
      id: "284cb5a2-f34b-48c3-86f6-d7016e0ce045",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>gpd;tUk; $w;Wfspy; vJ cz;ik? </br> 1. jkpo;nkhopapy; rpwe;j E}y;fs; ntsptUtij Cf;fg;gLj;Jk; tifapy; 33 tifg;ghLfspy; rpwe;j gilg;G mspj;j E}yhrphpah;fSf;Fk; gjpg;ghsh;fSf;Fk; Mz;LNjhWk; ghpR toq;fg;gLfpwJ. </br> 2. 1972 Kjy; jkpo; tsh;r;rpj;Jiwahy; toq;fg;gl;L tUfpwJ.   </p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "3deafcaf-1037-4346-a0d4-533133883728",
          choiceTranslationList: [
            {
              choiceField: "1> 2 rhp",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "8c66add4-4307-464d-90d0-c91fbea02a29",
          choiceTranslationList: [
            {
              choiceField: "1> 2 jtW",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "bd233b6a-e4bc-4317-aa80-d1e0f87341a4",
          choiceTranslationList: [
            {
              choiceField: "2 kl;Lk; rh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "fc9f38d8-c37a-4331-beea-40afe9dc2378",
          choiceTranslationList: [
            {
              choiceField: "1 kl;Lk; rhp",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [1],
    },
    {
      id: "3f6228ab-ba5a-485e-82e9-9429d29616ff",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>elg;ghz;by; fiyQhpd; midj;J fpuhk xUq;fpide;j Ntshz; tsh;r;rpj; jpl;lg; gzpfs; ______ Nfhbapy; 2504 fpuhk Cuhl;rpfspy; nray;gLfpwJ </p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "2eea07ef-d0d8-4826-a5f6-9628e57fcc29",
          choiceTranslationList: [
            {
              choiceField: "180 Nfhb",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "50047829-17c2-473e-881d-760bc9898d2e",
          choiceTranslationList: [
            {
              choiceField: "190 Nfhb",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "81f0e137-3022-431b-bd16-3aec79d3b048",
          choiceTranslationList: [
            {
              choiceField: "220 Nfhb",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "e996bcb6-e13e-4f82-9d7d-e635c42bd97f",
          choiceTranslationList: [
            {
              choiceField: "200 Nfhb",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [2],
    },
    {
      id: "438184d8-e81a-4792-9097-79910a0af867",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>,ytr> fl;lhaf; fy;tp chpik rl;lk; (RTE) 2009d;gb nghUshjhu hPjpahf eyptile;j gphpit Nrh;e;jth;fspd; Foe;ijfs; jdpahh; gs;spfspy; ____ rjtPjk; ,l xJf;fPL mspf;fg;gl Ntz;Lk;.</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "31d4f43b-c89d-4884-8d49-2478ae987140",
          choiceTranslationList: [
            {
              choiceField: "30%",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "5606381c-0df7-4be9-abdb-f059992ea9f9",
          choiceTranslationList: [
            {
              choiceField: "25%",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "6ac75d8d-f0e9-4821-85c2-0e115edb9ab9",
          choiceTranslationList: [
            {
              choiceField: "50%",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "b18aace6-b023-4d8a-b488-573aa0475c07",
          choiceTranslationList: [
            {
              choiceField: "33%",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [3],
    },
    {
      id: "49b91423-7f29-4dea-9a19-b44b71c04c1b",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField: "<p> ‘thA rf;jp - 24” gapw;rp eilngWk; ,lk; vJ?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "2caee228-436e-4a8e-a6ec-d306bf569259",
          choiceTranslationList: [
            {
              choiceField: "N[hj;G+h",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "2dbb5490-ae84-4bf0-b0e1-d78f96762408",
          choiceTranslationList: [
            {
              choiceField: "cja;G+h",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "aa8be70d-feb9-412f-b3ec-f509927058ed",
          choiceTranslationList: [
            {
              choiceField: "m[;kPh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "eed48a44-00e5-40fb-a146-e1ea99193572",
          choiceTranslationList: [
            {
              choiceField: "nghf;uhd",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [1],
    },
    {
      id: "4fcd2921-f3d1-44d4-aac4-18947299c954",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>epzePh; ahidf;fhy; Neha; gw;wpa $w;Wfspy; vJ cz;ik? </br> 1. kj;jpa Rfhjhuk; (k) FLk;g eyj;Jiwahy; epzePh; ahidf;fhy; Nehia xopg;gjw;F ‘kf;fs; gq;Nfw;Gld; $ba kUe;J eph;thf ,af;fj;jpd; Kjy; fl;lk; njhlf;fk;. </br> 2. 2028f;Fs; Nehia xopf;f 5 mk;r cj;jpia kj;jpa Rfhjhu mikr;rk; njhlf;fk; </br> 3. ghjpf;fg;gl;l gFjpapy; trpg;gth;fSf;F ,ytr jLg;G kUe;J tOq;Ftjd; %yk; Neha; guTtijj; jLg;gJ.</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "400a74c4-8440-4be3-8153-53bb499e83d4",
          choiceTranslationList: [
            {
              choiceField: "1> 2> 3 rhp",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "4165303b-a264-4beb-ba59-ba5144d6c41e",
          choiceTranslationList: [
            {
              choiceField: "1 kl;Lk; rh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "4527b734-9b21-4586-b7ee-48527d942ba4",
          choiceTranslationList: [
            {
              choiceField: "1> 2 rhp",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "edada8be-220c-4192-8f33-a28595c491bb",
          choiceTranslationList: [
            {
              choiceField: "1> 3 rh",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [0],
    },
    {
      id: "4ff34a71-5f19-49ff-8bec-21132a514058",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>mz;ikapy; njhlq;fg;gl;l ‘rhujp” ,izajsj;Jld; njhlh;Gila $w;W vJ?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "0f591eb4-faf5-4841-9cbb-59e1d25153e1",
          choiceTranslationList: [
            {
              choiceField: "tptrhag; gaph;fis Vw;Wkjp nra;Ak; trj",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "254215a9-d146-4cc1-b91a-450a8304630e",
          choiceTranslationList: [
            {
              choiceField:
                "gaph;fhg;gPL njhlh;ghd Fiwfisj; jPh;T toq;Fk; cjtp vz",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "337ef08f-0f17-4569-8eb5-ec569c7c20b9",
          choiceTranslationList: [
            {
              choiceField: "epyg;gjpT njhlh;ghd",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "8c4b20e5-0db1-4bcb-ba4b-57123a2ff918",
          choiceTranslationList: [
            {
              choiceField:
                "Gjpa tptrha njhopy;El;gq;fs; gw;wpa jfty;fis tptrhapfSf;F toq;Fjy",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [1],
    },
    {
      id: "50dc8855-853c-47bc-a540-ca893910db7d",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>mrhkpd; gpuk;kGj;jpuh ejp jpl;lj;jpw;F &.200 kpy;ypad; lhyh; fld; toq;f xg;Gjy; mspj;j tq;fp vJ?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "0536742d-2eb8-444f-b344-04ffde72f9f1",
          choiceTranslationList: [
            {
              choiceField: "Mrpa tsh;r;rp tq;f",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "12f82bbc-59d6-4c6f-963b-0607ffcdde68",
          choiceTranslationList: [
            {
              choiceField: "u;a tq;fp",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "8c0f820e-04e8-4cf8-b8c2-bccd46f5edbf",
          choiceTranslationList: [
            {
              choiceField: "yz;ld; tq;f",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "fa2f0408-fde9-4399-9ca7-ac0de0ae8513",
          choiceTranslationList: [
            {
              choiceField: "cyf tq;fp",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [3],
    },
    {
      id: "51ba7751-ba54-443b-a636-eb00c739fb0c",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p> gpd;tUk; $w;Wfspy; vJ cz;ik? </br> 1. Njrpa Flw;GO ePf;f ehs; Mz;LNjhWk; khh;r; (k) [Piy khjq;fspy; filg;gpbf;fg;gLfpwJ </br 2. ehL KOtJk; 19 taJf;Fl;gl;l rpwhh;> 30 taJf;Fl;gl;l tshpsk; ngz;fSf;F ‘my;ngz;lNrhy;” Flw;GO ePf;f khj;jpiufs; toq;fg;gLtJ tof;fk;</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "1c225cb6-d5cf-48b9-8b9e-9b3a4ebd1cd9",
          choiceTranslationList: [
            {
              choiceField: "2 kl;Lk; rhp",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "42350222-5d3b-4cd9-9180-5c0591879bbb",
          choiceTranslationList: [
            {
              choiceField: "1> 2 jtW",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "576a2ae8-1ab8-417c-a2e1-41de5239319c",
          choiceTranslationList: [
            {
              choiceField: "1 kl;Lk; rhp",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "a1415d61-d9de-49b3-87f6-525bd4a999d8",
          choiceTranslationList: [
            {
              choiceField: "1> 2 rhp",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [1],
    },
    {
      id: "536b72f2-8a41-4651-b1fa-d9fbc8f1db7e",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>cyfpd; nkhj;j vz;k ghpth;j;jidfspy; ______% ,e;jpahtpy; eilngWfpwJ.</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "0628a52a-5296-4395-8fcf-99649d18677b",
          choiceTranslationList: [
            {
              choiceField: "40%",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "ac104e08-1415-40dd-bcd1-8cc19998db4d",
          choiceTranslationList: [
            {
              choiceField: "46%",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "ef814c7b-f808-4732-b8bc-b2ba05590120",
          choiceTranslationList: [
            {
              choiceField: "47%",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "f4667d6a-f421-4c24-8588-49485f35561e",
          choiceTranslationList: [
            {
              choiceField: "45%",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [0],
    },
    {
      id: "54e5a2ca-83e9-4423-a845-24514af354f0",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>mz;ikapy;> jpUeq;iffSf;F ,ytr NgUe;J gazj;ij mwptpj;j efuk; vJ?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "168e190e-d12a-42d4-8916-13241d8e923b",
          choiceTranslationList: [
            {
              choiceField: "nly;yp",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "2de7257f-1527-4dac-8a03-751620f6810d",
          choiceTranslationList: [
            {
              choiceField: ",e;J}h",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "461cc73a-df22-4667-9556-f59aa7ed8108",
          choiceTranslationList: [
            {
              choiceField: "Kk;ig",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "ae62d0a0-a424-487c-8223-f13f4d7210bf",
          choiceTranslationList: [
            {
              choiceField: "nfhy;fj;jh",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [1],
    },
    {
      id: "57fcac39-0ddf-413e-a40f-dd9b3f5a74f4",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>Fwpg;ghf ghjpf;fg;glf;$ba goq;Fbapdh; FOthf tifg;gLj;jg;gl;l ‘Fbah Nfhz;L goq;Fbapdh; tfpf;Fk; khepyk;?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "1f9bd4cc-3dad-44d9-bfb5-89392b2ac065",
          choiceTranslationList: [
            {
              choiceField: "jphpGuh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "361834d8-8cb5-470e-8261-7ca328bd2e7c",
          choiceTranslationList: [
            {
              choiceField: "xbrh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "b5363042-b00f-4f9e-a492-2ba03ea59aa5",
          choiceTranslationList: [
            {
              choiceField: "mrhk",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "cc7c59be-69c4-437b-a335-f4de854bb6a3",
          choiceTranslationList: [
            {
              choiceField: "[hh;f;fz;l",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [1],
    },
    {
      id: "5c04219f-ecb3-48aa-917a-da7af83c6dc6",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p> 2024-cyf <uepyq;fs; ehSf;fhdf; fUg;nghUs; vd;d?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "705fb589-2bca-4ee3-916f-0d347efbe604",
          choiceTranslationList: [
            {
              choiceField: "Wetlands and Water",
              language: "ENGLISH",
            },
          ],
        },
        {
          id: "96d31811-4bc8-4b50-9749-edb89a147136",
          choiceTranslationList: [
            {
              choiceField: "Wetlands and Climate Change",
              language: "ENGLISH",
            },
          ],
        },
        {
          id: "b9bb29c0-9b60-461e-9178-f8c1019a927d",
          choiceTranslationList: [
            {
              choiceField: "Wetlands for a Sustainable Urban Future ",
              language: "ENGLISH",
            },
          ],
        },
        {
          id: "e19ff553-e5e0-4ab0-95fc-b2e60b8c5297",
          choiceTranslationList: [
            {
              choiceField: "Wetlands and Human Wellbeing",
              language: "ENGLISH",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [0],
    },
    {
      id: "70b1682c-ca58-496d-8d45-f022e9af0202",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>gpd;tUtdtw;Ws; nghUe;jhjJ </br> 1. ngz;fs; ghJfhg;G - 181  </br> 2. Nghplh; fhy cjtp - 1077  </br> 3. irgh; Fw;wq;fs; jLg;G - 14417  </br> 4. Foe;ijfs; ghJfhg;G - 1098 </p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "3760a21d-beee-4832-bc46-d1490167c08f",
          choiceTranslationList: [
            {
              choiceField: "2> 3 kl;Lk",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "5117ed94-bbb7-42a6-9a2d-6b677f3cac9d",
          choiceTranslationList: [
            {
              choiceField: "1 kl;Lk",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "7217e05f-6267-49cb-9de4-582d86d2fea6",
          choiceTranslationList: [
            {
              choiceField: "1> 2 kl;Lk",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "dbab0a80-a463-4e72-84bf-ab8caf62439b",
          choiceTranslationList: [
            {
              choiceField: "2> 3 kl;Lk",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [3],
    },
    {
      id: "70ff566f-bc8c-4a9b-aeb7-2ac4281924c3",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField: "<p>7tJ ,e;jpag; ngUq;fly; khehL vq;F eilngw;wJ?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "91d6f0a8-6742-4402-96bc-0ad7144fc26e",
          choiceTranslationList: [
            {
              choiceField: ",e;jpah",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "9a174cbe-7167-414b-b0a8-581ba4dadaf4",
          choiceTranslationList: [
            {
              choiceField: ",e;Njhdppah",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "ee044896-93d9-4a72-aba9-fb76e4c39627",
          choiceTranslationList: [
            {
              choiceField: ",yq;if",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "f9989d34-b24e-4cc2-a018-bed60ecdf448",
          choiceTranslationList: [
            {
              choiceField: "M];jpNuypah",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [1],
    },
    {
      id: "72626d04-eeeb-4111-88e3-89878934f290",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField: "<p>cyf Gw;WNeha; jpdk;?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "0921889e-2aad-48e8-bafe-6636fc93d8d1",
          choiceTranslationList: [
            {
              choiceField: "gpg;uthp 3",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "28c8c2d1-1229-4ebd-add7-c3d256ab085d",
          choiceTranslationList: [
            {
              choiceField: "gpg;uthp 6",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "5ac61575-074e-416f-85ef-69c73a438255",
          choiceTranslationList: [
            {
              choiceField: "gpg;uthp 2",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "8ea2fe4b-3ba9-47e4-9ed9-e4eb5e0f45ad",
          choiceTranslationList: [
            {
              choiceField: "gpg;uthp 4",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [0],
    },
    {
      id: "72f7c781-7a45-4800-b32f-3eb345732f3d",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>jkpo;ehl;bd; nghUshjhuk; _____ % Mf cah;e;Js;sJ</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "567f9035-2ed6-4033-b6c3-2fa59cab8ed7",
          choiceTranslationList: [
            {
              choiceField: "8.12",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "5af31f7f-bef2-47d9-bd96-c3d39befd629",
          choiceTranslationList: [
            {
              choiceField: "8.15",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "a0d28301-00f0-4748-9033-654752e6e15a",
          choiceTranslationList: [
            {
              choiceField: "8.19",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "dc0d79c2-7986-4a44-97fa-8c608c2d1945",
          choiceTranslationList: [
            {
              choiceField: "8.13",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [0],
    },
    {
      id: "7373278c-aede-41fc-bd2c-86e10580859d",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>mz;ikapy;> gPfhh; khepy ghg;&h; fpuhkg; gQ;rhaj;jpy; ‘];khh; fpuhkg; gQ;rhaj;J” vd;w Nrhjid mbg;gilapyhd jpl;lk; njhlq;fpa mikr;rfk; vJ?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "aed3e12b-3b6a-4419-9033-77469446054e",
          choiceTranslationList: [
            {
              choiceField: "epjp mikr;rfk",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "c687a5bb-965f-481d-b98c-5b8e4c0bf025",
          choiceTranslationList: [
            {
              choiceField: "th;j;jf kw;Wk; njhopy;Jiw mikr;rfk",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "d2233f95-d4f2-4ac7-8943-3a4b86bb1dd0",
          choiceTranslationList: [
            {
              choiceField: "jpwd; Nkk;ghl;L kw;Wk; njhopy; KidNthh; mikr;rfk;",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "e1957c34-00f4-4a61-abc2-f78a07c625f2",
          choiceTranslationList: [
            {
              choiceField: "Cuf tsh;r;rp kw;Wk; gQ;rhaj;J uh[; mikr;rfk",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [0],
    },
    {
      id: "754e94f0-90ca-4af0-b36f-aa82a6481f92",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>,e;jpahtpy; mjpf uhk;rhh; jsq;fs; nfhz;l khepyk;</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "2d9e96e3-ff6b-4689-bf44-a8fd6697dee4",
          choiceTranslationList: [
            {
              choiceField: "jkpo; ehL",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "ddf50d80-5d08-476c-b41c-e88faf8b8b24",
          choiceTranslationList: [
            {
              choiceField: "kfhuh;buh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "e56691bd-ad92-4a66-9758-bd921e0c4929",
          choiceTranslationList: [
            {
              choiceField: "Me;jpu gpuNjrk",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "e8d0fe14-be92-4055-8cd7-37c49268d2b1",
          choiceTranslationList: [
            {
              choiceField: "fh;ehlfh",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [0],
    },
    {
      id: "75fe4c4c-5a65-44d5-ab12-f2c6eb288888",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p> ICC nl];l; ngsypq; juthpirapy; Kjyplk; ngw;w Kjy; ,e;jpa Ntfg;ge;J tPr;rhsh; vd;w rpwg;igg; ngw;wth</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "27e9a7b4-2451-4f6a-b92d-8cd4769cb47e",
          choiceTranslationList: [
            {
              choiceField: "KfkJ rkp",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "c150a597-d3d9-4043-bdf9-a42e63a0e278",
          choiceTranslationList: [
            {
              choiceField: "Gk;uh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "cbd16d9d-4139-45cc-a864-448482095af6",
          choiceTranslationList: [
            {
              choiceField: "[hfPh; fhd",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "cf6f8b6c-456f-4d16-bf7d-2d0fad6d1940",
          choiceTranslationList: [
            {
              choiceField: "fgpy;Njt",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [1],
    },
    {
      id: "7658a1fe-5dce-4cde-948c-51ef3d3914cc",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField: "<p>‘Fire Capped Tit’ rhh;e;j ,dk</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "0a48df03-f8f8-4d06-9e84-a13c3eff86ac",
          choiceTranslationList: [
            {
              choiceField: "tz;zj;Jg;G+r;rp",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "ba9703f5-905a-4432-982b-1eb656963ab1",
          choiceTranslationList: [
            {
              choiceField: "rpye;j",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "dfbf4236-b1e3-4ea5-b9fa-503a478b8fe9",
          choiceTranslationList: [
            {
              choiceField: "kPd",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "f1759a40-89fb-4325-b1f8-c7503461c415",
          choiceTranslationList: [
            {
              choiceField: "gwit",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [0],
    },
    {
      id: "78313669-9715-463e-add2-189e4da2b124",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>Nuhl;by; Gdy; kpd;Dw;gj;jp jpl;lk; ve;j Mw;wpd; kPJ fl;lg;gl;Ls;sJ.</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "10d3bdad-ce7f-4926-b550-0a6764900975",
          choiceTranslationList: [
            {
              choiceField: "uhtp",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "56c1f22d-06ef-4e98-b1b4-6bda0b1c7d65",
          choiceTranslationList: [
            {
              choiceField: "rl;y[",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "97e8386f-73c1-4503-88b7-f106377c8acd",
          choiceTranslationList: [
            {
              choiceField: "[Pyk;",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "ae6b990a-af1e-4062-8bca-95843ba3be43",
          choiceTranslationList: [
            {
              choiceField: "nrdhg",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [3],
    },
    {
      id: "7d147cb9-bccd-4fd1-8cd9-e0524bb3719f",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>2024 Njrpa fUg;G HIV/AIDS tpopg;Gzh;T ehSf;fhd fUg;nghUs</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "08cd79ae-1a8f-4f05-be1e-93bf6d11774d",
          choiceTranslationList: [
            {
              choiceField:
                "Strenghthening Health care Infrastructure for Public Welfare.",
              language: "ENGLISH",
            },
          ],
        },
        {
          id: "6a2dba6e-174b-4086-9f5d-d633402ebb50",
          choiceTranslationList: [
            {
              choiceField: "‘Equalize”",
              language: "ENGLISH",
            },
          ],
        },
        {
          id: "8d4a4765-5f24-4bad-baba-c23a25919f68",
          choiceTranslationList: [
            {
              choiceField:
                "Engage, Educate, Empower, Uniting to End HIV/AIDS in Black communities.",
              language: "ENGLISH",
            },
          ],
        },
        {
          id: "f1560cb4-40e3-405c-abc3-dd0ac333a7da",
          choiceTranslationList: [
            {
              choiceField: "‘Let Communities Lead”",
              language: "ENGLISH",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [1],
    },
    {
      id: "7e84f33d-e817-432e-ac20-169027bafa5f",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField: "<p>‘Njrpa ghJfhg;G MNyhrfh</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "a0ef503f-aab5-4fe8-ab2d-54f7be80098d",
          choiceTranslationList: [
            {
              choiceField: "mutpe;j; gd fhhpah",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "b200f30a-3024-44aa-8f08-05225ee5d3ca",
          choiceTranslationList: [
            {
              choiceField: "m[pj; Njhty",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "bdfdc6b5-9c13-4e66-8a9d-001706939f32",
          choiceTranslationList: [
            {
              choiceField: "tpdPj; gh[;gha",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "e862268e-e9b6-4afc-a57a-58807cff05fe",
          choiceTranslationList: [
            {
              choiceField: "mutpe;j; mbfh",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [3],
    },
    {
      id: "7fc35ec3-2d4c-4351-8aa8-8435b2bc7c5c",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>TNPSC elj;jpa chpikapay; ePjpgjp gjtpf;fhd Njh;tpy; Njh;r;rp ngw;w Kjy; goq;Fbapdg; ngz; ve;j khtl;lj;ijr; rhh;e;jth</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "2a63472f-63ed-44b4-a72d-ee087e8443ac",
          choiceTranslationList: [
            {
              choiceField: "fd;dpahFkhp",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "60349b57-cb36-4221-8b6f-75aa425d6c5a",
          choiceTranslationList: [
            {
              choiceField: "jpUtz;zhkiy",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "74989b3a-2708-431b-a573-994511a82332",
          choiceTranslationList: [
            {
              choiceField: "tpUJefh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "dd7c680d-a8f9-4532-b834-5badfdd84c19",
          choiceTranslationList: [
            {
              choiceField: "nrd;id",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [3],
    },
    {
      id: "843fdd18-8452-4253-a3e2-a613874b392d",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>‘Jy;ypa mZFKiw Nulhh;” (Precision Approach Rader - PAR) vd;w Gjpa ghJfhg;G mikg;G vq;F mwpKfg;gLj;jg;gl;lJ</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "08dc72a2-7f6a-437d-a2b5-6ff7260ac231",
          choiceTranslationList: [
            {
              choiceField: "Nfush",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "3420073c-9f4b-41ff-9df1-9295880b2a46",
          choiceTranslationList: [
            {
              choiceField: "GJnly;yp",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "ab7f752f-aa7c-4a95-bf13-2a7cb5105d9f",
          choiceTranslationList: [
            {
              choiceField: ",yl;rj;jPTfs",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "b07f8a1a-484a-4210-b753-2f945afa725a",
          choiceTranslationList: [
            {
              choiceField: "me;jkhd; & epf;Nfhgh; jPTfs",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [0],
    },
    {
      id: "8468f228-c6b4-4886-a034-1783ef443bb7",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>mz;ikapy; ,e;jpa murpd; ePh;tpayhsh; nghWg;ig Vw;wth;?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "75f8eaab-a41d-465e-90b9-03def03b96a8",
          choiceTranslationList: [
            {
              choiceField: "Nyhr;rd; rpq; gjhdpah",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "a3babac0-f72f-4520-a248-7c10d73a6243",
          choiceTranslationList: [
            {
              choiceField: "Rdpy; yk;gh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "b1c2a013-914b-46b4-8946-d6bc60eb9ecf",
          choiceTranslationList: [
            {
              choiceField: "jpNd;Fkhh; jphpghjp",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "e6baaef8-d461-46aa-8d62-43eb31b6bda8",
          choiceTranslationList: [
            {
              choiceField: "Mjph; mNuhuh",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [3],
    },
    {
      id: "866e34d7-2a49-4eca-8df7-520a859ec8f4",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>gd;dh;fl;lh Njrpa G+q;fh mike;Js;s khepyk; vJ?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "076fe389-2a56-4c51-b399-1d3f72809554",
          choiceTranslationList: [
            {
              choiceField: "kj;jpag;gpuNjrk",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "0fdb8548-79c3-445e-82cd-d1965420ef8c",
          choiceTranslationList: [
            {
              choiceField: "fh;ehlfh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "40f37e3d-361b-49f3-b291-96422d1651bb",
          choiceTranslationList: [
            {
              choiceField: "Nfush",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "b8bf1688-0734-4287-8692-c23879375b96",
          choiceTranslationList: [
            {
              choiceField: "cj;jpufhz;l",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [0],
    },
    {
      id: "87e08bb3-3107-407d-be0c-87c901bf3220",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>2024-25 ,ilf;fhy gl;n[l;by; Mj;keph;ghh; vd;nza; tpj;Jf;fs; mgpahd;”f;fhf fUj;jpy; nfhs;sg;gLk; gaph;fs; vit?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "060ab355-c41f-48a3-8b7f-5c4c280e0304",
          choiceTranslationList: [
            {
              choiceField: "fLF> epyf;fliy> vs;> NrhagPd; kw;Wk; #hpafhe;j",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "46c41d80-0aa2-42f4-81e6-fc82ba471dd7",
          choiceTranslationList: [
            {
              choiceField: "ehl;Lf;fLF kw;Wk; gid",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "9abfcc7d-2347-45d0-8ef7-cd8403439ca7",
          choiceTranslationList: [
            {
              choiceField: "Nth;f;fliy kw;Wk; gid",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "e4388e4f-6d63-4d6d-9155-3862b6a50880",
          choiceTranslationList: [
            {
              choiceField: "gid> Njq;fha;> fNdhyh kw;Wk; #hpafhe;jp",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [0],
    },
    {
      id: "89bb0db6-6dfc-410f-b168-342474d697cf",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p> elg;G Mz;by; ,e;jpag; nghUshjhuj;ij ______ % Mf tsh;r;rp milAk; vd WTO fzpg;G</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "7adf242c-7947-4e7b-a8c2-04172fdd88a9",
          choiceTranslationList: [
            {
              choiceField: "8.1%",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "833e6955-4115-4ae5-ae22-7fa6175160e1",
          choiceTranslationList: [
            {
              choiceField: "8.3%",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "a2beb390-901a-487f-9962-d37f86ba0b2a",
          choiceTranslationList: [
            {
              choiceField: "8.5%",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "c104c905-b9a4-40cd-9f14-137efc9dd124",
          choiceTranslationList: [
            {
              choiceField: "8%",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [2],
    },
    {
      id: "8b9289ca-796f-4429-bf47-ff2f5a8ef844",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>‘EK Samandar Mere Andar’vd;w E}iy vOjpath; ahh;?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "3700f52e-c293-493c-a374-d7d045622a0e",
          choiceTranslationList: [
            {
              choiceField: "rQ;rPt; N[hp",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "667a4869-b672-49bb-ba14-3518dc8d6bb3",
          choiceTranslationList: [
            {
              choiceField: "Rdpy; Fkhh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "68c89a28-ee7d-400b-b233-c935dc75c69f",
          choiceTranslationList: [
            {
              choiceField: "tpf;uk; Nrj",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "95780d89-3aeb-4d3c-b29d-4ed3c6783380",
          choiceTranslationList: [
            {
              choiceField: "mh;[Pd; rpq",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [1],
    },
    {
      id: "8bafd7e0-13b8-45bf-a69e-e2f7427e366a",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField: "<p>. 2024 - ICC U19 cyff;Nfhg;igia ntd;w ehL vJ?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "3224aaf6-a858-469e-a186-cdb53fa11e04",
          choiceTranslationList: [
            {
              choiceField: "njd;dhg;gphpf;fh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "5dff931a-1c33-4869-bbf3-4759ce43540e",
          choiceTranslationList: [
            {
              choiceField: "M];jpNuypah",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "610ce948-b0cf-4622-b134-72b3008bc0ef",
          choiceTranslationList: [
            {
              choiceField: ",q;fpyhe;J",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "624bc1de-3909-4198-aad5-06019d858719",
          choiceTranslationList: [
            {
              choiceField: ",e;jpah",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [2],
    },
    {
      id: "8c6c9b02-3dc8-4630-872e-92b192128e52",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>ke;jpf;fha;r;ry; vd miof;fg;gLk; fpahrD}h; td Neha; gutp tUfpw khepyk; vJ?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "0ef4e611-447d-44d9-86d2-a1a37fcd4c3f",
          choiceTranslationList: [
            {
              choiceField: "Nfush",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "810da9f5-e0c9-4e9d-83b8-8cbf775e1fb7",
          choiceTranslationList: [
            {
              choiceField: "Me;jpug;gpuNjrk",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "8baaf27a-9bfc-4778-86fe-c5c0bf3e2e24",
          choiceTranslationList: [
            {
              choiceField: "cj;jpug;gpuNjrk",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "ea5f7a39-3330-46b6-ba39-0e9b3dec9fd0",
          choiceTranslationList: [
            {
              choiceField: "fh;ehlfh",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [1],
    },
    {
      id: "8d0c7ed8-2dec-4bdd-b847-a69a13efaced",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField: "<p>ehl;bd; Vw;Wkjp _____ lhyuhf mjpfhpj;Js;sJ.</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "0f2aa947-c851-409d-960a-0755f2b4a3f2",
          choiceTranslationList: [
            {
              choiceField: "775 gpy;ypad; ",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "0fdd355e-bdb3-4056-87c6-b65c64c5ae22",
          choiceTranslationList: [
            {
              choiceField: "776 gpy;ypad; ",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "657e8932-6838-4091-b1ac-1567b95a7b3e",
          choiceTranslationList: [
            {
              choiceField: "770 gpy;ypad",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "c7754654-0391-4687-b49c-27178c0955f4",
          choiceTranslationList: [
            {
              choiceField: "780 gpy;ypad;",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [1],
    },
    {
      id: "8dbffa01-6fd8-462e-95cb-b8b621bc900a",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>jkpo;ehL Mjpjpuhtplh; tPl;Ltrjp kw;Wk; Nkk;ghl;Lf; fofk; (jhl;Nfh) njhlq;fg;gl;l Mz;L?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "9a35f611-5b61-4a20-95f9-33d68d744724",
          choiceTranslationList: [
            {
              choiceField: "1974",
              language: "ENGLISH",
            },
          ],
        },
        {
          id: "a237e43a-54e1-4b44-8836-597605c1c0e9",
          choiceTranslationList: [
            {
              choiceField: "1973",
              language: "ENGLISH",
            },
          ],
        },
        {
          id: "ccb73026-0257-4377-9639-73935e25752b",
          choiceTranslationList: [
            {
              choiceField: "1976",
              language: "ENGLISH",
            },
          ],
        },
        {
          id: "e34de6e1-7f5b-47d8-bcc2-bc0cf565b813",
          choiceTranslationList: [
            {
              choiceField: "1971",
              language: "ENGLISH",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [3],
    },
    {
      id: "8e2c57c4-8fa8-4c30-929f-cdf8cb8c2833",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>‘rk; mq;fd;thb kw;Wk; Nghd; 2.0 jpl;lk; gw;wpa cz;ik vJ? </br> 1. Cuf tsh;r;rp mikr;rfk; nray;gLj;JfpwJ. </br> 2. Nghd; ,af;fk; 2.0 d; xU gFjpahFk;. </br> 3. epjp mikr;ruhy; 2021 gpg;uthpapy; njhlf;fk; </br> 4. 2023-24y; gl;n[l; xJf;fPL 25449 NfhbahFk;.</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "29f3ea31-0be1-46a6-84cb-5b2eb43b57fd",
          choiceTranslationList: [
            {
              choiceField: "1> 2> 3 rh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "731ae392-9564-4026-9f2b-25e8f33a2d53",
          choiceTranslationList: [
            {
              choiceField: "1> 2> 4 rh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "e63e6dd5-be50-4362-bacf-e4166970fcce",
          choiceTranslationList: [
            {
              choiceField: "2> 3> 4 rh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "ee7420c4-4b36-4c65-aa24-a59db7526e9e",
          choiceTranslationList: [
            {
              choiceField: "1> 2 rhp",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [1],
    },
    {
      id: "9c93fac2-1025-4e0e-b56e-1717e99f6aad",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>. cs;ehl;by; tbtikf;fg;gl;l ehl;bd; Kjy; 155 y;khh;l; ntbkUe;Jfis cUthf;f kpA+dpd;]; ,e;jp epWtdj;Jld; $l;L Nrh;e;Js;s epWtdk;?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "0787afed-77a1-4921-bee9-d238828c34b1",
          choiceTranslationList: [
            {
              choiceField: "IIT Kk;ig",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "2d8e7f07-4bc7-4ad1-a34a-96f93297232b",
          choiceTranslationList: [
            {
              choiceField: "IIT fhd;G+h",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "3f905c1c-b298-47b7-8ae0-093daf3e6f59",
          choiceTranslationList: [
            {
              choiceField: "IIT nrd;id",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "420b8773-6c22-48a8-ad81-75ae30c730c2",
          choiceTranslationList: [
            {
              choiceField: "IIT yf;Ndh",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [3],
    },
    {
      id: "a0ba99a0-162f-4555-b738-7ef50403441e",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>fle;j 10 Mz;Lfspy; ______ Nfhb Ngh; tWikapypUe;J kj;jpa muR kPl;fg;gl;Ls;sJ vd NITI MNahf; njhptpj;Js;sJ.</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "03aa8ac5-6e06-4796-9aff-d7a13dccada6",
          choiceTranslationList: [
            {
              choiceField: "23 Nfhb",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "2bcc6842-5afa-4170-9161-d011c21ac5e7",
          choiceTranslationList: [
            {
              choiceField: "29 Nfhb",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "686ffa35-ac8a-43d5-bba8-1dafe734fb7b",
          choiceTranslationList: [
            {
              choiceField: "20 Nfhb",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "b0202130-e469-4ed0-99c0-58965858338b",
          choiceTranslationList: [
            {
              choiceField: "25 Nfhb",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [0],
    },
    {
      id: "a3cd4bb2-5894-4508-802a-9a29222343ab",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>GHAR (Go Home and Re-Unite) ,izajsj;jpd; Nehf;fk; gw;wp $w;Wfspy; vJ cz;ik? </br> 1. Njrpa Foe;ijfs; chpikfs; ghJfhg;G Mizaj;jhy; cUthf;fk;. </br> 2. topjtwpa Foe;ijfis kPl;L> mth;fs; tPl;by; Nrh;g;gij b[pl;ly; Kiwapy; fz;fhzpj;jy;.</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "41b2f8ca-6d0d-4e07-9961-1b2a909e535d",
          choiceTranslationList: [
            {
              choiceField: "2 kl;Lk",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "704d011f-7a49-4b10-b5c5-4ed8f476e8fe",
          choiceTranslationList: [
            {
              choiceField: "1>2 rh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "9bff8fdf-25b4-4fe3-b0c7-cc508733e657",
          choiceTranslationList: [
            {
              choiceField: ",uz;Lk; rhpay;y",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "a0537482-3aa8-4695-a856-4250abb65b4f",
          choiceTranslationList: [
            {
              choiceField: "1 kl;Lk;",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [1],
    },
    {
      id: "a8ecce70-c9cc-48ec-98c3-b07dfc410843",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>nrgh`p[hyh tdtpyq;F ruzhyak; mike;Js;s khepyk;?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "3ce880a1-3732-4b70-ae09-485357d333f3",
          choiceTranslationList: [
            {
              choiceField: "mrhk",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "9491369e-7f41-426a-b2b0-5aa645d48ab7",
          choiceTranslationList: [
            {
              choiceField: "jphpGuh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "ad47a6ad-bc4c-4592-8ce8-0ccc2469b676",
          choiceTranslationList: [
            {
              choiceField: "kpNrhuk",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "f1487379-c275-4cfd-8d28-e67a98ed66cd",
          choiceTranslationList: [
            {
              choiceField: "ehfyhe;J",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [1],
    },
    {
      id: "a9278815-7436-4643-8255-57935390facd",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField: "<p>‘FIT ,e;jpah ,af;fj;jpd; Gjpa tpsk;guj;J}jh;?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "1510a23d-d4dc-4084-881f-cd2263b62d15",
          choiceTranslationList: [
            {
              choiceField: "#h;a Fkhh; ahjt",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "627a1111-431e-4cb2-bc40-b0864cf2a596",
          choiceTranslationList: [
            {
              choiceField: "mutpe;j; ahjt",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "8972a523-7041-4fd7-a452-f3b5950dd9c8",
          choiceTranslationList: [
            {
              choiceField: "N[hfpe;jh; Fkhh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "f17b6343-923b-4d27-89be-3d2d221e9587",
          choiceTranslationList: [
            {
              choiceField: "eNue;jpu Fkhh; ahjt",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [0],
    },
    {
      id: "aea9eeac-9b90-4a2a-a6f5-cd8b4310e20e",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>tpj;ahQ;ryp cjtpj;njhif jpl;lj;Jld; njhlh;Gila $w;Wfspy; vJ cz;ik? </br>1.,e;jpa murpd; fy;tp mikr;rfj;jhy; 2022 nrg;lk;ghpy; tpj;ahQ;ryp jpl;lk; mwpKfk; </br> 2.fy;tpia njhlu epjptrjp ,y;yhj khzth;fSf;F Mjutspg;gJ </br> 3. r%fk; (k) jdpahh; Jiwapd; cjtpiag; ngw;W muRg;gs;spfspy; fy;tpapd; juj;ij cah;j;JtJ</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "0a42d4bb-d5f4-458a-8154-1d661e3bc37d",
          choiceTranslationList: [
            {
              choiceField: "2> 3 kl;Lk; rhp",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "d94618cc-7476-46e4-bb25-b330641e72b6",
          choiceTranslationList: [
            {
              choiceField: "1> 3 kl;Lk; rhp",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "de82ec90-af79-4853-a547-5cae3d956a71",
          choiceTranslationList: [
            {
              choiceField: "> 2 kl;Lk; rh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "fa9360d8-e5a4-44bb-9e22-ca28be4b295d",
          choiceTranslationList: [
            {
              choiceField: "midj;Jk; rhp",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [2],
    },
    {
      id: "aebc3c35-ca3a-4ca7-a5fd-9104b1e5e079",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>gpd;tUk; $w;Wfspy; vit rhpahdit? </br> A. ehd; Kjy;td; jpl;lk; %yk; fle;j Mz;L 1.19 yl;rk; khzth;fs; gyd;. </br> B. kf;fisj; Njb kUj;Jtk; jpl;lk; %yk; 1.07 Nfhb Ngh; gyd;. </br> C. %tY}h; ,uhkkph;jk; mk;ikahh; epidT GJikg; ngz; jpl;lj;jpd; %yk; fy;Y}hpfspy; NrUk; khztpfspd; vz;zpf;if 34% mjpfhpg;G </br> D. cah;fy;tp gapYk; khzth;fSf;F GJikg; ngz; jpl;lk; %yk; khje;NjhUk; &.1200 toq;fg;gLfpwJ.</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "169c88f9-7351-48c0-a5e7-9b3dd1fb2aa5",
          choiceTranslationList: [
            {
              choiceField: "1>2 rhp",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "171922c1-b5f2-4312-a4cf-34e985dfcf44",
          choiceTranslationList: [
            {
              choiceField: "1> 3 rhp",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "674e81d5-f2b2-4f0f-baf6-df449e4b7c55",
          choiceTranslationList: [
            {
              choiceField: "1>2>3 rhp",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "f048df8d-85fb-4e39-abc4-4c990c4b7767",
          choiceTranslationList: [
            {
              choiceField: "midj;Jk; rhp",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [1],
    },
    {
      id: "b2fff0ee-55c5-4dd9-9ed6-f8c0ea96b41c",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p> nghJ rptpy; rl;lk; njhlh;ghd $w;Wfspy; vJ cz;ikay;y? </br> 1. ehl;bd; Kjy; khepykhf cj;jpug;gpuNjrk; khepyj;jpy; epiwNtw;wk; </br> 2. UCC tiuit cUthf;f Xa;Tngw;w ePjpgjp ,uQ;rdh Njrah; jiyikapy; 3 Ngh; nfhz;l FO mikf;fg;gl;lJ </br> 3. goq;Fbapdh; r%fj;jpdUf;Fk; klLk; tpyf;fspf;fg;gl;Ls;sJ </br> 4. Nfhth khepyj;jpy; kl;LNk UCC Nghh;j;Jf;fPrpah; Ml;rpf;fhyj;jpy; ,Ue;J eilKiwapy; cs;sJ.</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "35489688-38cd-46a8-a9e4-148a0ddd0525",
          choiceTranslationList: [
            {
              choiceField: "1> 3 kl;Lk;",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "3ca30df1-30d1-4576-8d13-453ac3565ab5",
          choiceTranslationList: [
            {
              choiceField: "1> 2 kl;Lk;",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "6a7b280e-c72d-4352-8a9c-b10f4082ace9",
          choiceTranslationList: [
            {
              choiceField: "1 kl;Lk;",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "ad55e6d5-3bb4-4b60-b70a-60473a880e52",
          choiceTranslationList: [
            {
              choiceField: "2 kl;Lk",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [3],
    },
    {
      id: "b3587540-a5aa-46e7-9ec1-8bfb9ce97cf5",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField: "<p>‘cyf Adhdp ehs;” mDrhpf;fg;gLfpw Njjp vJ?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "28e7b8d3-4fb0-4ab1-ac3c-e2bfba784ef2",
          choiceTranslationList: [
            {
              choiceField: "gpg;uthp -9",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "2f82ef1a-88aa-4952-a0e6-ac60f61b6a2e",
          choiceTranslationList: [
            {
              choiceField: "gpg;uthp 11",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "b04e327b-4e3c-4e3b-bcb3-e9e0a974160f",
          choiceTranslationList: [
            {
              choiceField: "gpg;uthp 12",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "df001679-5860-473e-a3f5-b1b5562eebc5",
          choiceTranslationList: [
            {
              choiceField: "gpg;uthp -10",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [2],
    },
    {
      id: "b4d8dda1-3874-4190-8948-87df4ff94c67",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>2022-23-y; ehl;bd; gztPf;fj;Jld; xg;gpLk;NghJ jkpo;ehl;bd; gztPf;fk;?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "7794471e-07b7-445a-93ab-e284a2a519c6",
          choiceTranslationList: [
            {
              choiceField: "5.96 %",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "886c2941-909b-4cc8-9c0d-a0eb34af7d9f",
          choiceTranslationList: [
            {
              choiceField: "5.98 %",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "f288f709-2371-47d6-92c5-2e0f4426bffb",
          choiceTranslationList: [
            {
              choiceField: "5.97 %",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "ff54fc20-b667-468c-832f-1f9c05143e12",
          choiceTranslationList: [
            {
              choiceField: "6.3 %",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [2],
    },
    {
      id: "b5695fea-77c6-4fe1-8c2c-b03b7e73ab5e",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>$w;W (A) : Mz;LNjhWk; gpg;uthp 13 Njrpa ngz;fs; jpdk; nfhz;lhlg;gLfpwJ. </br>fhuzk; (R) : ngz;fspd; chpikfSf;fhf Fuy; nfhLj;jjw;fhf Kj;Jyl;Rkp nul;bapd; gpwe;jehs; Njrpa ngz;fs; ehshff; nfhz;lhlg;gLfpwJ</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "3a9ba8b5-f967-4419-9f6f-bdd5a705cec2",
          choiceTranslationList: [
            {
              choiceField:
                "$w;W A kw;Wk; fhuzk; R rhp kw;Wk; fhuzk; R $w;W A tpd; rhpahd tpsf;fky;y",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "4eb8f0ad-5551-4193-b344-67606a35e71d",
          choiceTranslationList: [
            {
              choiceField: "$w;W A rhp> fhuzk; R jtW",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "e1251ac4-5e6d-47b6-8c87-98e36be13862",
          choiceTranslationList: [
            {
              choiceField:
                "$w;W A kw;Wk; fhuzk; R rhp kw;Wk; fhuzk; R $w;W A tpd; rhpahd tpsf;fk; ",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "f3eef3c6-af74-4af3-83b6-d98828c97ad9",
          choiceTranslationList: [
            {
              choiceField: "$w;W A jtW> fhuzk; R rhp",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [0],
    },
    {
      id: "b6aa862a-d384-4178-ab18-688f8508b702",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>gpd;tUtdtw;Ws; vJ> ‘mgpah];” Fwpj;j rpwe;j tpsf;fk;?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "26faff1e-2657-4cca-baf6-ba82a6220cb5",
          choiceTranslationList: [
            {
              choiceField: "mLj;j jiyKiw kiwe;jpUe;J jhf;Fk; tpkhdk",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "b4872a04-505b-4eeb-baf8-ff7efec88781",
          choiceTranslationList: [
            {
              choiceField: "xU nraw;if Nfhs",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "cf2cbf7c-2f9e-4144-be03-87589691ff21",
          choiceTranslationList: [
            {
              choiceField: "fpufq;fis fz;lwptjw;fhd xU Nghf;Ftuj;J Kiw",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "e6bb896e-c511-4b56-a17e-ed51eb9abee6",
          choiceTranslationList: [
            {
              choiceField: "thd; ,yf;Ffis mjpNtfkhf jhf;ff;$baJ",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [3],
    },
    {
      id: "bdb849f2-fe6c-4720-832e-d50c30963c14",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField: "<p>2024 cyf Gw;WNeha; ehSf;fhd fUg;nghUs; vd;d?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "185ad690-75e0-4665-8f82-97b3fa50e4a6",
          choiceTranslationList: [
            {
              choiceField: "We can I can",
              language: "ENGLISH",
            },
          ],
        },
        {
          id: "908ee14b-714c-4612-9e2b-01fd63ce51df",
          choiceTranslationList: [
            {
              choiceField: "I am and I will ",
              language: "ENGLISH",
            },
          ],
        },
        {
          id: "b90cf839-f16d-42c0-9625-2630754b8a69",
          choiceTranslationList: [
            {
              choiceField: "Close the Care Gap",
              language: "ENGLISH",
            },
          ],
        },
        {
          id: "cc63be96-9540-43d4-a342-f968aecb1f12",
          choiceTranslationList: [
            {
              choiceField: "Together let’s do something",
              language: "ENGLISH",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [2],
    },
    {
      id: "c1ee5294-1c11-4215-bd0c-e3a5b59eb34c",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>SAMARTH jpl;lj;jpd; Kjd;ik Nehf;fk;?2024 Njrpa fUg;G HIV/AIDS tpopg;Gzh;T ehSf;fhd fUg;nghUs</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "1afbc64c-02b0-40c9-a810-77790cf59017",
          choiceTranslationList: [
            {
              choiceField: "‘Equalize”",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "4f5526d7-4df6-4d99-a257-412a447552af",
          choiceTranslationList: [
            {
              choiceField:
                "Engage, Educate, Empower, Uniting to End HIV/AIDS in Black communities.",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "a5f4d837-fe40-4454-8494-cf414adcb061",
          choiceTranslationList: [
            {
              choiceField: "‘Let Communities Lead”",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "dae623a1-8fa6-45e9-9345-79608f134f70",
          choiceTranslationList: [
            {
              choiceField:
                "Strenghthening Health care Infrastructure for Public Welfare.",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [1],
    },
    {
      id: "c30e08c1-10d3-49e6-8f8a-85723cfe3239",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>,e;jpa flw;gilapy; 38 Mz;Lfs; gzpahw;wp Xa;T ngw;w fg;gy; vJ?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "03ab675d-b625-4462-9376-8613ce3d5b1b",
          choiceTranslationList: [
            {
              choiceField: "INS fg;uh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "3f6911b0-28fa-4ae3-aea5-7a7b9cb2f13d",
          choiceTranslationList: [
            {
              choiceField: "INS ep&gf",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "59757676-7d60-4cb1-858e-7b8b1b8ba26f",
          choiceTranslationList: [
            {
              choiceField: "INS Mjpj;ah",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "656e19a5-f21b-4789-b85e-738526338e6d",
          choiceTranslationList: [
            {
              choiceField: "INS re;jhaf",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [0],
    },
    {
      id: "ce484b68-8032-437f-8947-4943c6721418",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>23tJ cyf ePbj;j tsh;r;rp cr;rp khehL vq;F njhlq;fg;gl;lJ?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "0cfd8f11-cd51-44b9-bc67-a0c73f14688c",
          choiceTranslationList: [
            {
              choiceField: "Kk;ig",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "3c8da41f-4a82-4234-b8dc-d80b2f406d84",
          choiceTranslationList: [
            {
              choiceField: "Nfush",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "a46b1e74-45e5-431d-b741-82f03212e485",
          choiceTranslationList: [
            {
              choiceField: "mfkjhghj",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "a4ec0371-cac8-4ade-ab7b-7b00e564a2d8",
          choiceTranslationList: [
            {
              choiceField: "GJnly;y",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [0],
    },
    {
      id: "d274cfa0-5ee1-4ac8-94f7-13a726869798",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>WHO My; 2024Mk; Mz;bd; ney;rd; kz;Nlyh tpUJ toq;fp nfsutpf;fg;gl;l epWtdk;?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "11b53d28-d915-4325-9244-2307e6e7ff92",
          choiceTranslationList: [
            {
              choiceField: "kdeyk; kw;Wk; euk;G mwptpaYf;fhd Njrpa epWtdk; ",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "1454bf48-43c5-4d54-bc11-a5951cacff62",
          choiceTranslationList: [
            {
              choiceField: "AIMS kJiu",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "5d9239dc-6b29-47cf-ac63-aee45b59af2c",
          choiceTranslationList: [
            {
              choiceField: "Njrpa rpj;j epWtdk;",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "cbdaf77c-2722-4a8f-951b-709570196d84",
          choiceTranslationList: [
            {
              choiceField: "Njrpa Mah;Ntj epWtdk",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [3],
    },
    {
      id: "d92c2868-673c-4915-9ac6-0684ba35366b",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>,e;jpahtpy; ve;j khepy/Uty; mjpf gdpr;rpWj;ijfs; fhzg;gLfpwJ.</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "06422482-973c-493b-be95-adef41800ffe",
          choiceTranslationList: [
            {
              choiceField: "ylhf;",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "3cc4698e-a93e-4851-9547-fda208919d1d",
          choiceTranslationList: [
            {
              choiceField: ",khr;ry; gpuNjrk",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "65907cc1-502e-4af6-9cfa-ff031d4a188f",
          choiceTranslationList: [
            {
              choiceField: "[k;K fh;kPh;",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "9fe3b4a1-c3ac-42f5-838f-ce499d881c08",
          choiceTranslationList: [
            {
              choiceField: "cj;jpufhz;l",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [3],
    },
    {
      id: "db2f445f-a23c-446d-b71b-0ca8434852f7",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>Nfush khepyj;jpd; ve;j khtl;lk; rh;tNjr ,yf;fpa tpohit elj;jTs;sJ</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "04257996-6d81-4ff7-87db-1d98dabf7bdf",
          choiceTranslationList: [
            {
              choiceField: "nfhr;r",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "159bdb04-91db-462c-9f18-e957fc5f3f22",
          choiceTranslationList: [
            {
              choiceField: "jpUtde;jGuk",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "26eddcd0-4186-48ee-ad45-ccc46af85f52",
          choiceTranslationList: [
            {
              choiceField: "nfhy;yk",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "ecf540d7-6ff8-4cb5-b7d3-899b83c0f3c1",
          choiceTranslationList: [
            {
              choiceField: "jpUr;#h",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [2],
    },
    {
      id: "dc0d35b9-83cf-4cfc-8d28-52a896066940",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>. cj;jpufhz;l; khepyj;jpd; Kjy; ngz; jiyikr; nrayhsuhf epakpf;fg;gl;lth;?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "8ba16a66-670f-4b4c-9b5b-2052c48cfdef",
          choiceTranslationList: [
            {
              choiceField: ",uhjh Fg;jh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "bd47f757-d731-48fd-a365-463db0c72617",
          choiceTranslationList: [
            {
              choiceField: "utp fz;zh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "d6e092f2-7481-4770-b1bd-e742423c37cf",
          choiceTranslationList: [
            {
              choiceField: "fPjh fz;zh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "f12a7f13-a39e-4148-a939-116a4ecbbffd",
          choiceTranslationList: [
            {
              choiceField: ",uhjh uJhp",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [1],
    },
    {
      id: "dd5b18bc-3e2d-45d7-b9b8-53f3208911a8",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>GJr;Nrhpapd; Gjpa jiyikr; nrayhsuhf epakpf;fg;gl;lth</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "1e7ccb3a-8feb-43e2-bb58-7496375ae380",
          choiceTranslationList: [
            {
              choiceField: ",uh[pt; th;kh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "27bc059d-92a2-4315-a8ac-5cb2a0aa79d4",
          choiceTranslationList: [
            {
              choiceField: "ruj; nrsfhd",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "32183f0e-be28-40ac-b9ee-826266066605",
          choiceTranslationList: [
            {
              choiceField: "mdpy; nrsfhd;",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "760675ea-1a10-4def-8e91-55cabb3ddbed",
          choiceTranslationList: [
            {
              choiceField: ",uh[pt; Fkhh",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [1],
    },
    {
      id: "e1f245fa-a1d8-4957-ba9a-1b0d4a00f3ff",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>Nrhkhypahtpd; fpof;Ff; flw;fiuapy; flj;jg;gl;l kPdth;fis kPl;l ruA tif Nuhe;J fg;gy; vJ?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "22ba05e7-9f91-4ad0-9502-f78f8d61c3e8",
          choiceTranslationList: [
            {
              choiceField: "INS ep&gf",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "3af913dd-47a4-4744-a335-3522719233d4",
          choiceTranslationList: [
            {
              choiceField: "INS Rkpj;uh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "491d5398-f42a-4b19-8edb-215586448fac",
          choiceTranslationList: [
            {
              choiceField: "INS fg;uh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "a6736354-5768-4dc7-8b22-1b7ad89699a9",
          choiceTranslationList: [
            {
              choiceField: "INS Rth;zh",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [0],
    },
    {
      id: "e223ee8d-8c57-41e5-821e-b0f232fbc34c",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>,e;jpahtpy; ,e;jpah Njrpa nfhLg;gzTf; fofj;jhy; cUthf;fg;gl;l UPI cUthf;fg;gl;l Mz;L</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "1b67db1b-ed19-4eb5-bb5d-0d993990b7da",
          choiceTranslationList: [
            {
              choiceField: "2015",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "a25e21e9-6bd8-459c-b5b1-f140727de233",
          choiceTranslationList: [
            {
              choiceField: "2014",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "bbd7c08a-5b74-4c4d-8be4-6fafdde30a2e",
          choiceTranslationList: [
            {
              choiceField: "2016",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "c4824e67-a022-4adb-89aa-43c1d8259200",
          choiceTranslationList: [
            {
              choiceField: "2017",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [3],
    },
    {
      id: "e6d7bbef-cd4d-4ffa-9570-5bb059a20a0c",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>Coy; kpFe;j ehLfspd; gl;baypy; 2023Mk; Mz;L ,e;jpahtpd; ,lk</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "93d986bb-1b1c-4589-82d1-98067aa991fa",
          choiceTranslationList: [
            {
              choiceField: "89",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "d568c49b-5cd3-4d03-a6d4-9e4841b821c7",
          choiceTranslationList: [
            {
              choiceField: "92",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "dafbd1cf-8406-4e3e-be7a-86c26082661f",
          choiceTranslationList: [
            {
              choiceField: "93",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "f687ecf9-93dc-4b6b-9ebf-fc589aac928c",
          choiceTranslationList: [
            {
              choiceField: "91",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [2],
    },
    {
      id: "eae6a26a-fe65-448c-a2f7-484ac217a4ca",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>gpujkhpd; #hpa tPL ,ytr kpd;rhu jpl;lk; gw;wpa $w;Wfspy; vJ cz;ik? </br> 1. xU Nfhb FLk;gq;fSf;F khje;NjhWk; 300 myF ,ytr kpd;rhuk </br> 2. 70000 Nfhb KjyPl;by; nray;gLj;jg;gLk </br> 3. ,j;jpl;lk; %yk; Mz;Lf;F &.15000 - &.18000 tiu FLk;gj;jpduhy; Nrkpf;f KbAk;. </p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "42009b69-bc21-43f3-8cd0-67021653fc09",
          choiceTranslationList: [
            {
              choiceField: "1> 2> 3 rhp",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "8aa9a9f9-00d1-49e4-9acb-857f7665ede0",
          choiceTranslationList: [
            {
              choiceField: "1 kl;Lk; rh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "92940725-2b2b-4103-9a28-4169d6eb07f3",
          choiceTranslationList: [
            {
              choiceField: "1> 3 rhp",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "a36a46bc-dfd6-4f8a-a431-183d4e78a79f",
          choiceTranslationList: [
            {
              choiceField: "1> 2 rh",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [3],
    },
    {
      id: "ec765df9-53ad-4ea6-b222-a8a1bb7a5e18",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p> 2024-25 ,ilf;fhy gl;n[l;by; ,lk;ngw;w> ePyg;nghUsjhu vd;w nrhy;yhliyg; gpd;tUtdtw;Ws; vJ rpwg;ghf tpthpf;fpwJ.</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "5c1f8dd9-15fb-4391-b555-fc52c276247a",
          choiceTranslationList: [
            {
              choiceField: "nghUsjhu tshr;rpiag; Nkk;gLj;Jjy",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "653c8a18-b4a4-4767-bfa1-d5814a0c3416",
          choiceTranslationList: [
            {
              choiceField: "fpuhkg;Gw cs;fl;likg;ig Nkk;gLj;Jjy",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "be85d0d4-1996-44ac-afd6-3d25836b4709",
          choiceTranslationList: [
            {
              choiceField: "GJg;gpf;fj;jf;f Mw;wy; %yq;fs;",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "ebccbb49-3547-401a-942f-96119f08a56a",
          choiceTranslationList: [
            {
              choiceField:
                "ngUq;fly;fs;> fly;fs; kw;Wk; flw;fiufs; njhlh;ghd epiyahd tsh;r;rp",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [2],
    },
    {
      id: "f57993a3-bc5b-4ae1-9b84-b8ac49d41e4a",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>2024Mk; Mz;Lf;fhd ,e;jpa vhprf;jp thuk; vq;F ,e;jpa gpujkh; njhlq;fp itj;jhh</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "821a6e7f-a503-44e7-bc65-00114eb69c5d",
          choiceTranslationList: [
            {
              choiceField: "kj;jpag;gpuNjrk",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "8c7295c9-95af-4a8b-b630-87ac6dcc0752",
          choiceTranslationList: [
            {
              choiceField: "cj;jpug;gpuNjrk",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "aef73298-112c-438f-8dd4-57aa857510dd",
          choiceTranslationList: [
            {
              choiceField: "Nfhth",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "cedcb8fb-18e8-402d-8a91-67586373acdf",
          choiceTranslationList: [
            {
              choiceField: "F[uhj",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [2],
    },
    {
      id: "f8945ff7-5dca-4997-ab34-dac16122cb4e",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>gpd;tUk; $w;Wfspy; vJ cz;ik: </br> 1. fhiuntl;b gwit ruzhyak; - mhpaY}h; </br> 2. yhq;Tg; Nrhiy fhg;Gf;fhL - jpUney;Ntyp </br> 3. TNy; 100 rJg;G epyq;fisg; ghJfhf;f &.115.15 Nfhb nrytpy; jkpo;ehL rJg;G epyq;fs; ,af;fk; vd;w jpl;lk; nray;gLj;jp tUfpwJ.</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "1016acb2-9c93-4bc3-b358-66d819e25675",
          choiceTranslationList: [
            {
              choiceField: "midj;Jk; rh",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "71f8b5b5-f809-4352-9d8c-7a14258273cf",
          choiceTranslationList: [
            {
              choiceField: "1 kl;Lk;",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "a6654092-23bf-41f0-a502-7cb4e5e738d0",
          choiceTranslationList: [
            {
              choiceField: "1>3 kl;Lk",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "a8f784b3-de70-4736-91f4-d2df319cfb31",
          choiceTranslationList: [
            {
              choiceField: "1>2 kl;Lk",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [2],
    },
    {
      id: "fca8c83b-33c0-4286-8fb9-fc1ac1a770b9",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>NfhJik vhpge;j Neha; (Wheat Blast diseases) vjdhy; Vw;gLfpwJ</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "1717c669-8e21-4352-b9e2-8767fbbeaff9",
          choiceTranslationList: [
            {
              choiceField: "G+Q;ir",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "210fbb6b-b351-4998-bb6e-f6e024db352d",
          choiceTranslationList: [
            {
              choiceField: "GOf;fs",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "4ab52c05-b0a6-4d5a-af0e-11ddf687532c",
          choiceTranslationList: [
            {
              choiceField: "itu]",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "b46fb2f4-c0a9-42c0-bccc-f4db217f8e05",
          choiceTranslationList: [
            {
              choiceField: "ghf;Bhpah",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [2],
    },
    {
      id: "fda6eb15-94c3-4944-ac33-e6c3957b8c3c",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>mz;ikapy; Xa;Tngw;w gPg; gpNu]; vf;fhTld; njhlh;GilaJ vJ?</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "0b4a30ab-c1b5-4382-9d64-65c27042c3a8",
          choiceTranslationList: [
            {
              choiceField: "tpy;tpj;ij",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "6dc90e8e-f65c-4de7-8dd7-06a349370c43",
          choiceTranslationList: [
            {
              choiceField: "`hf;fp",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "d10156df-0c46-4df2-bd0b-c78d7917e052",
          choiceTranslationList: [
            {
              choiceField: "Nlgpy; nld;dp]",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "debc800e-e728-469c-af5a-48912e2f770e",
          choiceTranslationList: [
            {
              choiceField: "fhy;ge;J",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [2],
    },
    {
      id: "fe2b9ca7-ec43-4bdc-a163-4565b44cd17c",
      topicId: "f86b559a-038f-4c8f-a13c-bd2fc0008007",
      type: "SINGLE",
      questionTranslations: [
        {
          questionField:
            "<p>fiyQh; ];Nghh;l;]; fpl; jpl;lk; gw;wpa $w;Wfspy; vJ cz;ik </br> 1. TNy; midj;J Cuhl;rpfSf;Fk; tpisahl;L cgfuzq;fs; mspf;Fk; jpl;lkhFk; </br> 2. tpisahl;Lj;Jiw mikr;rfk; jpUr;rpapy; gpg;uthp 7-y; njhlq;fpaJ</p>",
          language: "TAMIL",
        },
      ],
      choice: [
        {
          id: "5dfcca9a-1706-4593-b576-d3222ee35c4e",
          choiceTranslationList: [
            {
              choiceField: "1>2 kl;Lk",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "756d11d2-6145-4a0c-8886-ce0408f4d982",
          choiceTranslationList: [
            {
              choiceField: "1 kl;Lk",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "a4a26f3f-4251-4f6a-b52f-5cf48d9e5192",
          choiceTranslationList: [
            {
              choiceField: ",uz;Lk; rhpay;y",
              language: "TAMIL",
            },
          ],
        },
        {
          id: "bf0db8cf-f176-460c-a9cc-ee1c78670759",
          choiceTranslationList: [
            {
              choiceField: "2 kl;Lk",
              language: "TAMIL",
            },
          ],
        },
      ],
      isFlagged: true,
      answer: [0],
    },
  ];
  console.log(data.length);
  const mapping = data.map((val: any) => {
    return val.questionTranslations.map((val1: any) => {
      return val1.questionField;
    });
  });
  console.log(mapping);
  const [client] = useState(new QueryClient());
  return (
    <main>
      <div>
        <QueryClientProvider client={client}>
          <ReactQuery />
        </QueryClientProvider>
      </div>
    </main>
  );
}
