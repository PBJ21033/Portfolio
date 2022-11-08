#ifndef BST_H
#define BST_H
class BST
{
private:
	struct TreeNode
	{
		int value;
		TreeNode* left; // pointer to the left child node
		TreeNode* right; // pointer to the right child node
	};
	TreeNode* root;

	// private member functions.
	void insert(TreeNode*&, TreeNode*&);
	
	void displayInOrder(TreeNode*) const;
	void displayPreOrder(TreeNode*) const;
	void dipslayPostOrder(TreeNode*) const;
	
public:
	BST()
	{
		root = nullptr;
	}
	// BST operations
	void insertNode(int);
	
	int searchNode(int);
	

	void displayInOrder() const
	{
		displayInOrder(root);
	}
	void displayPreOrder() const
	{
		displayPreOrder(root);
	}
	void displayPostOrder() const
	{
		dipslayPostOrder(root);
	}
};

#endif // !BST_H
