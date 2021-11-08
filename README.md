# GithubDashboardSample
L’application se basera sur l’api Github et regroupera des informations associées à un utilisateur choisi .

=> Pour diminuer le nombre de webservice appelé , un WS lancé si l'utilisateur a mis 1,5 seconde sans modifié son text . 

1 : si la zone de text est vide , aucun WS sera lancé . 

2 : si le text ne convient à aucune proposotion , une popup " Utilisateur non trouvé " sera affichée  . 

3 : si l'api retourne un msg d'erreur , une popup " Erreur " sera affichée .

4 : Si l'api retourne une liste de proposition , la liste sera en attente que l'utilisateur selectionne un item.
 
![Capture d’écran 2021-11-07 à 14 31 37](https://user-images.githubusercontent.com/24412653/140647233-41932998-702f-43d4-8fbc-2e74985c4ed2.png)
![Capture d’écran 2021-11-07 à 14 33 35](https://user-images.githubusercontent.com/24412653/140647249-711ac108-cb2b-4753-af7c-ddcd346939df.png)


=> La récupération des repos se fait avec pagination , en scrollant vers le bas , le nbr page sera incrementé (nextPage++) et un ws sera lancé . 

-Si l'api retourne items[]  alors y'aura plus de lancement de WS  ( hasNoMoreResult = false ) 

![Capture d’écran 2021-11-07 à 14 32 06](https://user-images.githubusercontent.com/24412653/140647287-f956e738-cbd6-4916-ac40-e86b96a98f00.png)

=>Vu qu'on a toutes les infos necessaires , aucun ws n'est lancé sur cet ecran.

![Capture d’écran 2021-11-07 à 14 32 15](https://user-images.githubusercontent.com/24412653/140647302-b1d55a29-3c45-49e5-84cb-ee9311a6717c.png)



Env technique : 

NVM : v10.20.0

REACT : 17.0.2

REACT-NATIVE : 0.64.1 

ps : les dependencies de ce projet need to be updated . 
