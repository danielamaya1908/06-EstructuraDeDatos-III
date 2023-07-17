'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
 }
 
 BinarySearchTree.prototype.insert = function (value) {
   if (value <= this.value) {
     if (!this.left) {
       this.left = new BinarySearchTree(value);
     } else {
       this.left.insert(value);
     }
   } else {
     if (!this.right) {
       this.right = new BinarySearchTree(value);
     } else {
       this.right.insert(value);
     }
   }
 };
 
 BinarySearchTree.prototype.contains = function (value) {
   if (value === this.value) {
     return true;
   }
 
   if (value < this.value) {
     if (!this.left) {
       return false;
     } else {
       return this.left.contains(value);
     }
   } else {
     if (!this.right) {
       return false;
     } else {
       return this.right.contains(value);
     }
   }
 };
 
 BinarySearchTree.prototype.depthFirstForEach = function (callback, order = 'in-order') {
   if (order === 'in-order') {
     this._inOrder(callback);
   } else if (order === 'pre-order') {
     this._preOrder(callback);
   } else if (order === 'post-order') {
     this._postOrder(callback);
   } else {
     throw new Error('Invalid order specified');
   }
 };
 
 BinarySearchTree.prototype._inOrder = function (callback) {
   if (!this) return;
   if (this.left) this.left._inOrder(callback);
   callback(this.value);
   if (this.right) this.right._inOrder(callback);
 };
 
 BinarySearchTree.prototype._preOrder = function (callback) {
   if (!this) return;
   callback(this.value);
   if (this.left) this.left._preOrder(callback);
   if (this.right) this.right._preOrder(callback);
 };
 
 BinarySearchTree.prototype._postOrder = function (callback) {
   if (!this) return;
   if (this.left) this.left._postOrder(callback);
   if (this.right) this.right._postOrder(callback);
   callback(this.value);
 };
 
 BinarySearchTree.prototype.size = function () {
   let size = 1;
   if (this.left) {
     size += this.left.size();
   }
   if (this.right) {
     size += this.right.size();
   }
   return size;
 };
 
 BinarySearchTree.prototype.breadthFirstForEach = function (callback) {
   const queue = [this];
   while (queue.length > 0) {
     const node = queue.shift();
     callback(node.value);
     if (node.left) queue.push(node.left);
     if (node.right) queue.push(node.right);
   }
 };
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
