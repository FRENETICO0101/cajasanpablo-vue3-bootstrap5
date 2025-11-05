#!/bin/bash

# Script to remove assetPrefix and revert to hardcoded /src/assets paths

echo "Removing assetPrefix from all Vue components..."

# Function to revert assetPrefix usage in a file
remove_asset_prefix() {
    local file="$1"
    echo "Processing: $file"
    
    # Remove assetPrefix import/declaration lines
    sed -i '' '/^\/\/ Get asset prefix from environment$/d' "$file"
    sed -i '' '/^const assetPrefix = import\.meta\.env\.VITE_ASSET_PREFIX.*$/d' "$file"
    
    # Remove computed import if it's only used for assetPrefix
    # (This is a simple check - you might need to verify manually)
    
    # Replace template literals with hardcoded paths
    # For src attributes: :src="`${assetPrefix}/assets/..." -> src="/src/assets/..."
    sed -i '' 's|:src="`${assetPrefix}/assets/\([^`]*\)`"|src="/src/assets/\1"|g' "$file"
    
    # For href attributes: :href="`${assetPrefix}/assets/..." -> href="/src/assets/..."
    sed -i '' 's|:href="`${assetPrefix}/assets/\([^`]*\)`"|href="/src/assets/\1"|g' "$file"
    
    # For image-url attributes: :image-url="`${assetPrefix}/assets/..." -> image-url="/src/assets/..."
    sed -i '' 's|:image-url="`${assetPrefix}/assets/\([^`]*\)`"|image-url="/src/assets/\1"|g' "$file"
    
    # For object properties: imageSrc: `${assetPrefix}/assets/... -> imageSrc: '/src/assets/...
    sed -i '' "s|imageSrc: \`\${assetPrefix}/assets/\([^`]*\)\`|imageSrc: '/src/assets/\1'|g" "$file"
    
    # For object properties: image: `${assetPrefix}/assets/... -> image: '/src/assets/...
    sed -i '' "s|image: \`\${assetPrefix}/assets/\([^`]*\)\`|image: '/src/assets/\1'|g" "$file"
    
    # For icon properties
    sed -i '' "s|icon: \`\${assetPrefix}/assets/\([^`]*\)\`|icon: '/src/assets/\1'|g" "$file"
    
    # For CSS url() functions: url(`${assetPrefix}/assets/... -> url('/src/assets/...
    sed -i '' "s|url(\`\${assetPrefix}/assets/\([^`]*\)\`)|url('/src/assets/\1')|g" "$file"
    
    # For any remaining template literals
    sed -i '' "s|\`\${assetPrefix}/assets/\([^`]*\)\`|'/src/assets/\1'|g" "$file"
    
    # Clean up any empty lines left behind
    sed -i '' '/^$/N;/^\n$/d' "$file"
}

# Process all Vue files that were modified
find src/components -name "*.vue" -exec grep -l 'assetPrefix' {} \; | while read file; do
    remove_asset_prefix "$file"
done

echo "Completed removing assetPrefix from all components!"
echo "Note: You may need to manually review some files for proper syntax."