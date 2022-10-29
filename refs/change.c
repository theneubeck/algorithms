#include <stdio.h>
#include <limits.h>
#include <stdlib.h>
#include <string.h>

int* initArr(int noOfElements) {
  int* arr = (int *)malloc(sizeof(int) * noOfElements);
  return arr;
}

int change(int* coins, int noOfCoins, int totalAmount) {
  int numOfTurns = 0;

  //coinsUsed[i] will contain the number of coins needed to change the amount i.
  int* coinsUsed = initArr(totalAmount+1);

  for (int currentAmount=1; currentAmount<=totalAmount; currentAmount++) {

    int minCoins = INT_MAX;
    for (int j=0; j<noOfCoins; j++) {
      numOfTurns++;
      //Try to use each of the coins and check wich gives the smallest total number of coins used.
      if (currentAmount < coins[j]) {
	//Can't use coin j.
	continue;
      }
      /*Try to use current coin. In order to use it we must subtract the value of the current
	coin from currentAmount and then add one coin (the current) to the total number of coins
	used. */
      if (coinsUsed[currentAmount - coins[j]] + 1 < minCoins) {
	//Fewer coins where used this way.
	minCoins = coinsUsed[currentAmount - coins[j]] + 1;
      }
    }

    coinsUsed[currentAmount] = minCoins;
  }

  // printf("Det krävdes %d varv i loopen\n", numOfTurns);
  return coinsUsed[totalAmount];

}

main(int argn, char** args) {
  int coins[] = {1000, 500, 100, 50, 20, 10, 5, 1};
  int noOfCoins = 8;

  int examples[] = {22, 13, 2, 4, 27, 46, 9, 8, 13};

  for (int e = 0; e <= sizeof(examples); e++) {

  // printf("Det krävs %d mynt.\n", change(coins, noOfCoins, atoi(args[1])));
  // int totalAmount = atoi(args[1]);
    int totalAmount = examples[e];
    printf("[%d, %d],\n", totalAmount, change(coins, noOfCoins, totalAmount));
  }
}
