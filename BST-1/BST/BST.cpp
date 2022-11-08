#include <iostream>
#include "BST.h"

using namespace std;

/******************************************************************************
* INSERT NODE
* INPUT: number
* 
* DESCRIPTION: This function inserts a node into the tree.
******************************************************************************/
void BST::insertNode(int num)
{
	TreeNode* newNode = nullptr; // pointer to a new node.

	// Create a new node and store a num in it.
	newNode = new TreeNode;
	newNode->value = num;
	newNode->left = newNode->right = nullptr;

	//insert the node.
	insert(root, newNode);
}

/******************************************************************************
* INSERT
* INPUT: pointer to the old node and to the new node.
*
* DESCRIPTION: searches where to insert the node.
******************************************************************************/
void BST::insert(TreeNode*& nodePtr, TreeNode*& newNode)
{
	if (nodePtr == nullptr)
	{
		nodePtr = newNode;
	}
	else if (newNode->value < nodePtr->value)
	{
		insert(nodePtr->left, newNode); // search the left branch
	}
	else
	{
		insert(nodePtr->right, newNode); // search the right branch
	}
	
}

/******************************************************************************
* DISPLAY IN ORDER
* INPUT: pointer
*
* DESCRIPTION: Displays the nodes in order. 
******************************************************************************/
void BST::displayInOrder(TreeNode* nodePtr) const
{
	if (nodePtr)
	{
		displayInOrder(nodePtr->left);
		cout << nodePtr->value << endl;
		displayInOrder(nodePtr->right);

	}
}

/******************************************************************************
* DISPLAY PREORDER
* INPUT: node pointer
*
* DESCRIPTION: This displays the information before it is sorted.
******************************************************************************/
void BST::displayPreOrder(TreeNode* nodePtr) const
{
	if (nodePtr)
	{
		cout << nodePtr->value << endl;
		displayPreOrder(nodePtr->left);
		displayPreOrder(nodePtr->right);
	}
}

/******************************************************************************
* SEARCH NODE
* INPUT: number
*
* DESCRIPTION: This function searches through the tree. 
******************************************************************************/
int BST::searchNode(int num)
{
	TreeNode* nodePtr = root;
	while (nodePtr)
	{
		if (nodePtr->value == num)
		{
			return num;
		}
		else if (num < nodePtr->value)
		{
			nodePtr = nodePtr->left;
		}
		else
		{
			nodePtr = nodePtr->right;
		}
	}
}

/******************************************************************************
* DISPLAY POST ORDER
* INPUT: node pointer
*
* DESCRIPTION: This function displays in the information after it is sorted. 
******************************************************************************/
void BST::dipslayPostOrder(TreeNode *nodePtr) const
{
	if (nodePtr)
	{
		dipslayPostOrder(nodePtr->left);
		dipslayPostOrder(nodePtr->right);
		cout << nodePtr->value << endl;
	}
}