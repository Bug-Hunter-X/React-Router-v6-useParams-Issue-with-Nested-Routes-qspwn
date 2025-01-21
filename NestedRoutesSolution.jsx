To fix this, ensure that the parent route's parameter is included in the child route's path.  If the parent route's parameter is always going to be present in the URL, you can simply add it to the child route's path. If not, you might need to pass the data down as props or use a different state management solution. 

Example: 

Incorrect:

```jsx
<Route path="/parent/:parentId">
  <Route path="child">
    <ChildComponent/>
  </Route>
</Route>
```

Correct:

```jsx
<Route path="/parent/:parentId">
  <Route path=":parentId/child">
    <ChildComponent/>
  </Route>
</Route>
```
In the corrected version, the child route's path now includes ":parentId", allowing the child component to access this parameter via useParams.