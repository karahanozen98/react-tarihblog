import React from "react";
import CategoryComponent from "./CategoryComponent.js";

function Categories(props) {
  // a function to check is the category name is already in list so we dont add to identical categories.
  const isInCategory = (categoryList, name, id) => {
    for (let i = 0; i < categoryList.length; i++) {
      if (categoryList[i].categoryName.toLowerCase() === name.toLowerCase()) {
        categoryList[i].nOfSubjects++; // add number of subjects belongs to that category.
        //categoryList[i].objectIds.push(id); // push the id of the subject belong to that category.
        return true; // return true means "this category is already in list"
      }
    }
    return false; // if not found return false
  };

  const initCategories = () => {
    var tmpList = [];
    for (let i = 0; i < props.Data.length; i++) {
      var element = props.Data[i];

      if (!isInCategory(tmpList, element.category, element.id)) {
        // create a category object from database subjects, each category has a name, number of topics inside that category and their id's of course
        var tmpCategory = {
          categoryName: element.category.toString(),
          nOfSubjects: 1,
          // objectIds: [element.id],
        };
        tmpList.push(tmpCategory); // a list of category titles
      }
    }
    return tmpList;
  };

  const categoryList = initCategories(); // initialize and parse all the categories

  const categories = categoryList.map((item) => {
    return (
      <CategoryComponent
        key={item.categoryName}
        item={item}
      ></CategoryComponent>
    );
  });
  return <div style={{minHeight:"100vh"}}>{categories}</div>;
}
export default Categories;
